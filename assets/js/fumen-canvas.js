const { decoder } = require('tetris-fumen');

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

function draw(fumenPage, numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background) {
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

function fumencanvas(container) {
	var input = container.innerText;
	if(container.getAttribute('height') != null) {var height = container.getAttribute('height')} else {var height = 5};
	if(container.getAttribute('width') != null) {var width = container.getAttribute('width')} else {var width = 10};
	if(container.getAttribute('size') != null) {var cellSize = container.getAttribute('size')} else {var cellSize = 22};
	if(container.getAttribute('grid') != null) {var gridColor = container.getAttribute('grid'); var gridToggle = true} else {var gridToggle = false};
	if(container.getAttribute('background') != null) {var background = container.getAttribute('background'); var transparency_four = false} else {var transparency_four = true};

	var fumenCodes = [];

	for (let rawInput of input.split('\t')) {
		fumenCodes.push(...rawInput.split(/\s/));
	}

	for (let code of fumenCodes) {
		try {
			var pages = decoder.decode(code);
			canvas = draw(pages[0], height, width, cellSize, gridToggle, gridColor, transparency_four, background);

			var img = document.createElement('img');
			
			img.src = canvas.toDataURL("image/png");
			img.className = 'imageOutput';
			
			container.innerText = '';
			container.appendChild(img);
		} catch (error) { console.log(code, error); }
	}
}

function minocanvas(container) {
	var input = container.innerText
	container.innerText = ''
	for(let i = 0; i < input.length; i++){
		var img = document.createElement('img')
		img.src = '/h-docs/attachments_mino/' + input[i] + '.png'
		container.appendChild(img)
	}
}


function formatPage() {
	let fumenTags = document.getElementsByTagName('fumen')
	let minoTags = document.getElementsByTagName('mino')
	Array.from(fumenTags).forEach(tag => fumencanvas(tag))
	Array.from(minoTags).forEach(tag => minocanvas(tag))
}

window.addEventListener('million:navigate', formatPage);
window.addEventListener('DOMContentLoaded', formatPage);

