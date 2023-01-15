colorMapping = {
	"S": 7,
	"J": 6,
	"T": 5,
	"Z": 4,
	"O": 3,
	"L": 2,
	"I": 1
};

reverseMapping = {
	7: 4,
	4: 7,
	6: 2,
	2: 6,
	5: 5,
	3: 3,
	1: 1,
	0: 0,
	8: 8
};

reverseMappingLetters = {
	"L": "J",
	"J": "L",
	"S": "Z",
	"Z": "S",
	"T": "T",
	"O": "O",
	"I": "I",
};

reverseMappingRotation = {
	"spawn": "spawn",
	"right": "left",
	"reverse": "reverse",
	"left": "right"
};

function mirrorFumen(input) {
	var fumenCodes = [], results = [];
	for (let rawInput of input.split("\t")) {
		fumenCodes.push(...rawInput.split(/\s/));
	}

	for (let code of fumenCodes) {
		try {
			let inputPages = decoder.decode(code);
			for (let i = 0; i < inputPages.length; i++) {

				toMirrorBoard = inputPages[i]["_field"]["field"]["pieces"];
				for (let rowIndex = 0; rowIndex < 23; rowIndex++) {
					row = toMirrorBoard.slice(rowIndex * 10, (rowIndex + 1) * 10);
					for (let colIndex = 0; colIndex < 10; colIndex++) {
						toMirrorBoard[rowIndex * 10 + colIndex] = reverseMapping[row[9 - colIndex]];
					}
				}

				op = inputPages[i]["operation"];
				if (op) {
					op.type = reverseMappingLetters[op.type];
					op.x = 9 - op.x;
					if ("IO".includes(op.type)) { // thonk
						if (op.rotation == "reverse") op.x++;
						else if (op.rotation == "left" && op.type == "O") op.x++;
						else if (op.rotation == "spawn" || op.type == "O") op.x--;

					}
					if ("SZLJT".includes(op.type)) op.rotation = reverseMappingRotation[op.rotation];
				}

			}

			results.push(encoder.encode(inputPages));
		} catch (error) { console.log(code, error); }
	}
	return results;
}

function clearedOffset(rowsCleared, yIndex) {
    for (let row of rowsCleared) {
        if (yIndex >= row) yIndex++;
    }
    return yIndex;
}

function unglueFumen(input) {
	let gluePieces = {
		T: [
			[[0, 0], [0, -1], [0, 1], [1, 0]],
			[[0, 0], [0, 1], [1, 0], [-1, 0]],
			[[0, 0], [0, -1], [0, 1], [-1, 0]],
			[[0, 0], [0, -1], [1, 0], [-1, 0]]
		],
		I: [
			[[0, 0], [0, -1], [0, 1], [0, 2]],
			[[0, 0], [1, 0], [-1, 0], [-2, 0]],
			[[0, 0], [0, -1], [0, -2], [0, 1]],
			[[0, 0], [1, 0], [2, 0], [-1, 0]]
		],
		L: [
			[[0, 0], [0, -1], [0, 1], [1, 1]],
			[[0, 0], [1, 0], [-1, 0], [-1, 1]],
			[[0, 0], [0, -1], [0, 1], [-1, -1]],
			[[0, 0], [1, -1], [1, 0], [-1, 0]]
		],
		J: [
			[[0, 0], [0, -1], [0, 1], [1, -1]],
			[[0, 0], [1, 0], [-1, 0], [1, 1]],
			[[0, 0], [0, -1], [0, 1], [-1, 1]],
			[[0, 0], [-1, -1], [1, 0], [-1, 0]]
		],
		S: [
			[[0, 0], [0, -1], [1, 0], [1, 1]],
			[[0, 0], [1, 0], [0, 1], [-1, 1]],
			[[0, 0], [0, 1], [-1, 0], [-1, -1]],
			[[0, 0], [-1, 0], [0, -1], [1, -1]]
		],
		Z: [
			[[0, 0], [0, 1], [1, 0], [1, -1]],
			[[0, 0], [-1, 0], [0, 1], [1, 1]],
			[[0, 0], [0, -1], [-1, 0], [-1, 1]],
			[[0, 0], [1, 0], [0, -1], [-1, -1]]
		],
		O: [
			[[0, 0], [1, 0], [0, 1], [1, 1]],
			[[0, 0], [0, 1], [-1, 0], [-1, 1]],
			[[0, 0], [-1, 0], [0, -1], [-1, -1]],
			[[0, 0], [0, -1], [1, -1], [1, 0]]
		]
	}
	
	let rotationMapping = {
		"spawn": 0,
		"right": 1,
		"reverse": 2,
		"left": 3
	}
	
	let colorMapping = {
		"S": 7,
		"J": 6,
		"T": 5,
		"Z": 4,
		"O": 3,
		"L": 2,
		"I": 1
	}

    var fumenCodes = [];
    let results = []
    for (let rawInput of input.split("\t")) {
        fumenCodes.push(...rawInput.split(/\s/));
    }
    
    for (let code of fumenCodes) {
        try {
            let inputPages = decoder.decode(code);
            toUnglueBoard = inputPages[0]["_field"]["field"]["pieces"];
            rowsCleared = [];

            for (let pageNum = 0; pageNum < inputPages.length; pageNum++) {
                op = inputPages[pageNum]["operation"];
                piece = gluePieces[op["type"]][rotationMapping[op["rotation"]]];

                for (let mino of piece) {
                    yIndex = op.y + mino[0];
                    yIndex = clearedOffset(rowsCleared, yIndex);
                    xIndex = op.x + mino[1];
                    index = yIndex * 10 + xIndex;
                    if (toUnglueBoard[index] != 0) { console.log("error"); } // some intersect with the toUnglueBoard
                    toUnglueBoard[index] = colorMapping[op["type"]];
                }

                temp = [];

                for (let y = -2; y < 3; y++) { // rows in which the piece might have been
                    yIndex = op.y + y;
                    yIndex = clearedOffset(rowsCleared, yIndex);
                    if (yIndex >= 0) { // sanity check
                        rowCleared = true;
                        for (let x = 0; x < 10; x++) {
                            index = yIndex * 10 + x;
                            rowCleared = rowCleared && (toUnglueBoard[index] != 0);
                        }
                        if (rowCleared) {
                            temp.push(yIndex);
                        }
                    }
                }

                for (let row of temp) {
                    if (!rowsCleared.includes(row)) {
                        rowsCleared.push(row);
                        rowsCleared.sort();
                    }
                }
            
            }

            let outputPages = [inputPages[0]]; // lazily generating output fumen by destructively modifying the input
            outputPages[0]["operation"] = undefined;
            outputPages[0]["_field"]["field"]["pieces"] = toUnglueBoard;

            results.push(encoder.encode(outputPages));
            
        } catch (error) { console.log(code, error); }
    }

    return results.join(' ')
}
