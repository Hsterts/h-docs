const { decoder, encoder } = require('tetris-fumen');

allGridToggle = false

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

function draw(fumenPage, { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline }) {
	var cellSize = parseFloat(cellSize);
	var field = fumenPage.field;
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

	if(allGridToggle){gridColor = '#ffffff'}

	if (gridToggle || allGridToggle) {
		//Border
		context.strokeStyle = gridColor;
		context.strokeRect(0, 0, width, height);
		// for (i = 0; i < numcols; i++) {
		// 	for (j = 0; j < numrows; j++) {
		// 		// all dim grids
		// 		context.fillStyle = gridColor + '30';
		// 		context.fillRect(i * cellSize, height - (j + 1) * cellSize, 1, cellSize);
		// 		context.fillRect(i * cellSize, height - (j + 1) * cellSize, cellSize, 1);
		// 	}
		// }
	}

	for (i = 0; i < numcols; i++) {
		for (j = 0; j < numrows; j++) {
			if (field.at(i, j) != '_') {
				// all blocks
				context.fillStyle = colors[field.at(i, j)].normal;
				context.fillRect(i * cellSize, height - (j + 1) * cellSize, cellSize, cellSize);
				// all dim grids
				if (gridToggle || allGridToggle) {
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
					if (gridToggle || allGridToggle) {
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
				if (gridToggle || allGridToggle) {
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

	if(lock){
		for (i = 0; i < numcols; i++) {
			var filled = 0
			for (j = 0; j < numrows; j++) {
				if(field.at(j, i) != '_'){filled++}
			}
			if(filled == 10){
				context.fillStyle = '#FFFFFF40';
				context.fillRect(0, height - (i + 1) * cellSize, width, cellSize);
			}
		}
	}

	if(outline){
		var index = fumenPage.index
		var outlineField = decoder.decode(outline)[index].field
		for (i = 0; i < numcols; i++) {
			for (j = 0; j < numrows; j++) {
				if(outlineField.at(i, j) != '_'){
					context.fillStyle = '#FFFFFF';
					// left border
					if (outlineField.at(Math.max(i - 1, 0), j) == '_') {
						context.fillRect(i * cellSize - 1, height - (j + 1) * cellSize, 2, cellSize + 1);
					}
					// top border
					if (outlineField.at(i, j + 1) == '_') {
						context.fillRect(i * cellSize - 1, height - (j + 1) * cellSize, cellSize + 1, 2);
					}
					// right border
					if (outlineField.at(i + 1, j) == '_') {
						context.fillRect((i + 1) * cellSize - 1, height - (j + 1) * cellSize, 2, cellSize + 1);
					}
					// bottom border
					if (outlineField.at(i, j - 1) == '_') {
						context.fillRect(i * cellSize - 1, height - j * cellSize, cellSize + 1, 2);
					}
				}
			}
		}
	}
	return canvas;
}

function drawFumens(fumenPages, { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline}) {
	var width = cellSize * numcols;
	var height = numrows * cellSize;
	var canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	var encoder = new GIFEncoder();
	encoder.start();
	encoder.setRepeat(0); // 0 for repeat, -1 for no-repeat
	encoder.setDelay(delay); // frame delay in ms
	encoder.setQuality(1); // image quality. 10 is default.
	if (transparency_four) {
		encoder.setTransparent('rgba(0, 0, 0, 0)');
	}
	for (x = 0; x < fumenPages.length; x++) {
		var frame = draw(fumenPages[x], { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline}).getContext('2d');
		encoder.addFrame(frame);
	}
	encoder.finish();
	return encoder;
}

function generateDiagram(code, options) {
	var pages = decoder.decode(code);
	var img = document.createElement('img');
	if(pages.length == 1){
		var canvas = draw(pages[0], options);
		img.src = canvas.toDataURL("image/png");
		img.className = 'fumen-image';
	}
	if(pages.length > 1){
		gif = drawFumens(pages, options);
		var binary_gif = gif.stream().getData();
		var data_url = 'data:image/gif;base64,' + btoa(binary_gif);
        var img = document.createElement('img');
		img.src = data_url;
		img.className = 'fumen-image';
	}
	var figure = document.createElement('figure');
	figure.className = options.figure ? "fumen-figure" : "fumen-figure minimized";
	if(options.clipboard == "true"){
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
		figure.appendChild(button)
	};
	figure.appendChild(img);

	if (pages[0].comment && options.figure) {
		var caption = document.createElement('figcaption');
		captionLines = pages[0].comment.split("\n");
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

function fumencanvas(container, figure) {
	if(container.dataset.code == null) container.dataset.code = container.innerHTML;
	var fumenCodes = container.dataset.code;
	container.innerText = '';
	
	var options = {
		'figure': figure,
		'clipboard': container.getAttribute('clipboard') || "true",
		'numrows': parseFloat(container.getAttribute('height')) || 5,
		'numcols': parseFloat(container.getAttribute('width')) || 10,
		'cellSize': parseFloat(container.getAttribute('size')) || 22,
		'gridColor': container.getAttribute('grid'),
		'gridToggle': container.getAttribute('grid') != null,
		'background': container.getAttribute('background'),
		'transparency_four': container.getAttribute('background') == null,
		'delay': parseFloat(container.getAttribute('delay')) || 500,
		'lock': container.getAttribute('lock'),
		'outline': container.getAttribute('outline')
	};

	if(mirrored) {
		fumenCodes = mirrorFumen(fumenCodes)[0];
		if(options.outline){options.outline = mirrorFumen(options.outline)[0]};
	}

	try {
		container.appendChild(generateDiagram(fumenCodes, options));
	} catch (error) { console.log(fumenCodes, error); }
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
	Array.from(document.getElementsByTagName('fumen')).forEach(tag => fumencanvas(tag, false));
	Array.from(document.getElementsByTagName('figfumen')).forEach(tag => fumencanvas(tag, true));
	Array.from(document.getElementsByClassName('mino')).forEach(tag => minocanvas(tag));
}

window.addEventListener('million:navigate', formatPage);
window.addEventListener('DOMContentLoaded', formatPage);