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


//drawing settings
var cellSize = 22;
var transparency_four = true;
var gridToggle = false;
var numcols = 10;

function draw(fumenPage, tilesize, numrows, transparent, gridColor) {
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

	const width = tilesize * numcols;
	const height = numrows * tilesize;

	var canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;

	const context = canvas.getContext('2d');

	if (!transparent) {
		context.fillStyle = document.getElementById('bg').value;
	} else {
		context.fillStyle = 'rgba(0, 0, 0, 0)';
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
				context.fillRect(i * tilesize, height - (j + 1) * tilesize, 1, tilesize);
				context.fillRect(i * tilesize, height - (j + 1) * tilesize, tilesize, 1);
			}
		}
	}

	for (i = 0; i < numcols; i++) {
		for (j = 0; j < numrows; j++) {
			if (field.at(i, j) != '_') {
				// all blocks
				context.fillStyle = colors[field.at(i, j)].normal;
				context.fillRect(i * tilesize, height - (j + 1) * tilesize, tilesize, tilesize);
				// all dim grids
				if (gridToggle) {
					context.fillStyle = gridColor + '40';
					context.fillRect(i * tilesize, height - (j + 1) * tilesize, 1, tilesize);
					context.fillRect(i * tilesize, height - (j + 1) * tilesize, tilesize, 1);
					context.fillRect((i + 1) * tilesize, height - (j + 1) * tilesize, 1, tilesize);
					context.fillRect(i * tilesize, height - j * tilesize, tilesize, 1);
				}
				if (field.at(i, j + 1) == '_') {
					// all highlights
					context.fillStyle = colors[field.at(i, j)].light;
					context.fillRect(i * tilesize, height - (j + 1) * tilesize - tilesize / 5, tilesize, tilesize / 5);
					if (gridToggle) {
						// all top dim highlight borders
						context.fillStyle = gridColor + 'CC';
						context.fillRect(i * tilesize, height - (j + 1) * tilesize - tilesize / 5, tilesize, 1);
						// left kinda dim highlight borders
						if (field.at(Math.max(0, i - 1), j + 1) == '_') {
							context.fillStyle = gridColor + 'CC';
							context.fillRect(i * tilesize, height - (j + 1) * tilesize - tilesize / 5, 1, tilesize / 5);
						} else {
							context.fillStyle = gridColor + 'FF';
							context.fillRect(i * tilesize, height - (j + 1) * tilesize - tilesize / 5, 1, tilesize / 5);
						}
						// right kinda dim highlight borders
						if (field.at(i + 1, j + 1) == '_') {
							context.fillStyle = gridColor + 'CC';
							context.fillRect((i + 1) * tilesize, height - (j + 1) * tilesize - tilesize / 5, 1, tilesize / 5);
						}
					}
				}
				if (gridToggle) {
					context.fillStyle = gridColor + 'FF';
					// left border
					if (field.at(Math.max(i - 1, 0), j) == '_') {
						context.fillRect(i * tilesize, height - (j + 1) * tilesize, 1, tilesize + 1);
					}
					// top border
					if (field.at(i, j + 1) == '_') {
						context.fillRect(i * tilesize, height - (j + 1) * tilesize, tilesize + 1, 1);
					}
					// right border
					if (field.at(i + 1, j) == '_') {
						context.fillRect((i + 1) * tilesize, height - (j + 1) * tilesize, 1, tilesize + 1);
					}
					// bottom border
					if (field.at(i, j - 1) == '_') {
						context.fillRect(i * tilesize, height - j * tilesize, tilesize + 1, 1);
					}
				}
			}
		}
	}
	return canvas;
}

function fumencanvas(container) {
	var input = container.innerHTML;
	container.innerHTML = '';

	var height = undefined;
	var gridColor = '#ffffff';

	var fumenCodes = [];

	for (let rawInput of input.split('\t')) {
		fumenCodes.push(...rawInput.split(/\s/));
	}

	for (let code of fumenCodes) {
		try {
			var pages = decoder.decode(code);
			canvas = draw(pages[0], cellSize, height, transparency_four, gridColor);

			var img = document.createElement('img');
			
			img.src = canvas.toDataURL("image/png");
			img.className = 'imageOutput';

			container.appendChild(img);
		} catch (error) { console.log(code, error); }
	}
}

window.addEventListener('DOMContentLoaded', () => {
  let tags = document.getElementsByTagName('fumen');
	Array.from(tags).forEach(tag => {
		console.log(tag);
		fumencanvas(tag);
	});
})