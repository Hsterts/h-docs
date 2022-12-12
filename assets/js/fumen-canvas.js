const { decoder, encoder } = require('tetris-fumen');

var colors = {
	I: { normal: '#41afde', highlight1: '#3dc0fb', highlight2: '#3dc0fb', lighter: '#3dc0fb', light: '#43d3ff' },
	T: { normal: '#b451ac', highlight1: '#d161c9', highlight2: '#d161c9', lighter: '#d161c9', light: '#e56add' },
	S: { normal: '#66c65c', highlight1: '#75d96a', highlight2: '#7cd97a', lighter: '#7cd97a', light: '#88ee86' },
	Z: { normal: '#ef624d', highlight1: '#ff7866', highlight2: '#ff8778', lighter: '#fd7660', light: '#ff9484' },
	L: { normal: '#ef9535', highlight1: '#ffa94d', highlight2: '#ffae58', lighter: '#fea440', light: '#ffbf60' },
	J: { normal: '#1983bf', highlight1: '#1997e3', highlight2: '#1997e3', lighter: '#1997e3', light: '#1ba6f9' },
	O: { normal: '#f7d33e', highlight1: '#ffe34b', highlight2: '#ffe34b', lighter: '#ffe34b', light: '#fff952' },
	X: { normal: '#bbbbbb', highlight1: '#686868', highlight2: '#686868', lighter: '#bbbbbb', light: '#cccccc' },
	Empty: { normal: '#f3f3ed' },
};

function draw(fumenPage, { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background }) {
	var field = fumenPage.field;
	var operation = fumenPage.operation;

	function operationFilter(e) {
		return i == e.x && j == e.y;
	}

	if (numrows == undefined) {
		numrows = 0;
		for (i = 0; i < numcols; i++) {
			for (j = 0; j < 23; j++) {
				if (field.at(i, j) != '_') {
					numrows = Math.max(numrows, j);
				}
				if (operation != undefined && operation.positions().filter(operationFilter).length > 0) {
					numrows = Math.max(numrows, j);
				}
			}
		}
		numrows += 2;
	}

	var width = cellSize * numcols;
	var height = numrows * cellSize;

	var canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	const context = canvas.getContext('2d');

	if (!transparency_four) {
		context.fillStyle = background;
	} else {
		context.fillStyle = '#00000000';
	}

	context.fillRect(0, 0, width, height);

	if (gridToggle) {
		//Border
		context.strokeStyle = gridColor;
		context.strokeRect(0, 0, width, height);
		for (i = 0; i < numcols; i++) {
			for (j = 0; j < numrows; j++) {
				// all dim grids
				context.fillStyle = gridColor + '30';
				context.fillRect(i * cellSize, height - (j + 1) * cellSize, 1, cellSize);
				context.fillRect(i * cellSize, height - (j + 1) * cellSize, cellSize, 1);
			}
		}
	}

	for (i = 0; i < numcols; i++) {
		for (j = 0; j < numrows; j++) {
			if (field.at(i, j) != '_') {
				// all blocks
				context.fillStyle = colors[field.at(i, j)].normal;
				context.fillRect(i * cellSize, height - (j + 1) * cellSize, cellSize, cellSize);
				// all dim grids
				if (gridToggle) {
					context.fillStyle = gridColor + '40';
					context.fillRect(i * cellSize, height - (j + 1) * cellSize, 1, cellSize);
					context.fillRect(i * cellSize, height - (j + 1) * cellSize, cellSize, 1);
					context.fillRect((i + 1) * cellSize, height - (j + 1) * cellSize, 1, cellSize);
					context.fillRect(i * cellSize, height - j * cellSize, cellSize, 1);
				}
				if (field.at(i, j + 1) == '_') {
					// all highlights
					context.fillStyle = colors[field.at(i, j)].light;
					context.fillRect(i * cellSize, height - (j + 1) * cellSize - cellSize / 5, cellSize, cellSize / 5);
					if (gridToggle) {
						// all top dim highlight borders
						context.fillStyle = gridColor + 'CC';
						context.fillRect(i * cellSize, height - (j + 1) * cellSize - cellSize / 5, cellSize, 1);
						// left kinda dim highlight borders
						if (field.at(Math.max(0, i - 1), j + 1) == '_') {
							context.fillStyle = gridColor + 'CC';
							context.fillRect(i * cellSize, height - (j + 1) * cellSize - cellSize / 5, 1, cellSize / 5);
						} else {
							context.fillStyle = gridColor + 'FF';
							context.fillRect(i * cellSize, height - (j + 1) * cellSize - cellSize / 5, 1, cellSize / 5);
						}
						// right kinda dim highlight borders
						if (field.at(i + 1, j + 1) == '_') {
							context.fillStyle = gridColor + 'CC';
							context.fillRect((i + 1) * cellSize, height - (j + 1) * cellSize - cellSize / 5, 1, cellSize / 5);
						}
					}
				}
				if (gridToggle) {
					context.fillStyle = gridColor + 'FF';
					// left border
					if (field.at(Math.max(i - 1, 0), j) == '_') {
						context.fillRect(i * cellSize, height - (j + 1) * cellSize, 1, cellSize + 1);
					}
					// top border
					if (field.at(i, j + 1) == '_') {
						context.fillRect(i * cellSize, height - (j + 1) * cellSize, cellSize + 1, 1);
					}
					// right border
					if (field.at(i + 1, j) == '_') {
						context.fillRect((i + 1) * cellSize, height - (j + 1) * cellSize, 1, cellSize + 1);
					}
					// bottom border
					if (field.at(i, j - 1) == '_') {
						context.fillRect(i * cellSize, height - j * cellSize, cellSize + 1, 1);
					}
				}
			}
		}
	}
	return canvas;
}

function generateDiagram(frame, options, code) {
	var canvas = draw(frame, options);
	var figure = document.createElement('figure');
	figure.className = options.figure ? "fumen-figure" : "fumen-figure minimized";

	var img = document.createElement('img');
	img.src = canvas.toDataURL("image/png");
	img.className = 'fumen-image';
	
	var button = document.createElement("button");
	button.className = "fumen-clipboard-button";
	button.type = "button";
	button.innerHTML = svgCopy;
	button.addEventListener("click", () => {
		navigator.clipboard.writeText(code).then(
			() => {
				button.blur();
				button.innerHTML = svgCheck;
				setTimeout(() => {
					button.innerHTML = svgCopy
					button.style.borderColor = ""
				}, 2000);
			},
			(error) => (button.innerHTML = "Error")
		);
	});

	figure.appendChild(button);
	figure.appendChild(img);

	if (frame.comment && options.figure) {
		var caption = document.createElement('figcaption');
		captionLines = frame.comment.split("\n");
		for(let i = 0; i < captionLines.length; i++){
			span = document.createElement('span');
			words = captionLines[i];
			if(mirrored){
				words = captionLines[i].split(' ');
				for(let j = 0; j < words.length; j++){
					if(words[j].match(/^[TILJSZO]+$/g)){
						words[j] = words[j]
							.replace('L','X')
							.replace('S','Y')
							.replace('J','L')
							.replace('Z','S')
							.replace('X','J')
							.replace('Y','Z');
					}
				}
				words = words.join(' ');
			}
			span.innerText = words;
			caption.appendChild(span);
			caption.appendChild(document.createElement('br'));
		}
		figure.appendChild(caption);
	}

	return figure;
}

function fumencanvas(container, collate, figure) {
	if(container.dataset.code == null) container.dataset.code = container.innerHTML;
	var input = container.dataset.code;
	container.innerText = '';

	var options = {
		'figure': figure,
		'numrows': container.getAttribute('height') || 5,
		'numcols': container.getAttribute('width') || 10,
		'cellSize': container.getAttribute('size') || 22,
		'gridColor': container.getAttribute('grid'),
		'gridToggle': container.getAttribute('grid') != null,
		'background': container.getAttribute('background'),
		'transparency_four': container.getAttribute('background') == null
	};

	var fumenCodes = input.split(/\s+/);
	if(mirrored) {
		for(let x = 0; x < fumenCodes.length; x++) {
			fumenCodes[x] = mirrorFumen(fumenCodes[x])[0];
		}
	}

	for (let code of fumenCodes) {
		try {
			if (collate) {
				container.appendChild(generateDiagram(decoder.decode(code)[0], options, code));
			} else {
				var spoiler = document.createElement('details');

				var summary = document.createElement('summary');
				summary.textContent = container.getAttribute('spoiler') || 'Solves';

				spoiler.appendChild(summary);
				decoder.decode(code).forEach(p => spoiler.appendChild(generateDiagram(p, options, code)));
				container.appendChild(spoiler);
			}
		} catch (error) { console.log(code, error); }
	}
}

function minocanvas(container) {
	//this isn't made with canvas at all, but names be names for sure
	if(container.getAttribute('mino') == null) container.setAttribute('mino', container.innerText);
	var input = container.getAttribute('mino');
	container.innerText = '';
	
	if(mirrored) {
		let res = '';
		for(let char of input) {
			if('LJSZ'.includes(char)) {
				switch(char) {
					case 'L': res += 'J'; break;
					case 'J': res += 'L'; break;
					case 'S': res += 'Z'; break;
					case 'Z': res += 'S'; break;
				}
			} else {
				res += char;
			}
		}

		input = res;
	}
	
	for (let i = 0; i < input.length; i++) {
		if ('TILJSZO'.indexOf(input[i]) != -1) {
			var img = document.createElement('img');
			img.setAttribute('draggable', false)
			img.src = '/h-docs/attachments_mino/' + input[i] + '.png';
			container.appendChild(img);
		}
	}
}

function formatPage() {
	Array.from(document.getElementsByTagName('fumen')).forEach(tag => fumencanvas(tag, true, false));
	Array.from(document.getElementsByTagName('figfumen')).forEach(tag => fumencanvas(tag, true, true));
	Array.from(document.getElementsByTagName('solution')).forEach(tag => fumencanvas(tag, false));
	Array.from(document.getElementsByClassName('mino')).forEach(tag => minocanvas(tag));
}

window.addEventListener('million:navigate', formatPage);
window.addEventListener('DOMContentLoaded', formatPage);