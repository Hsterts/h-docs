"use strict"
var saveFiles = [] //cache save files used in this page
const pieces = 'TILJSZO'

//currently only gets saves from the <saves>, make it a parameter
function getSaves(source) { //hooked to onclick event
	let display = document.getElementById(source + '-display')
	let rot = rotationMode == 'with180' ? '180' : '90'
	let saveFile = JSON.parse(JSON.stringify(saveFiles[source + '-' + rot]))
	let saveFilePieceOrder = saveFile.shift() //remove first line listing the tetrominos

	let selectedPieces = []
	console.log(saveFilePieceOrder, selectedPieces, source + '-' + rot)
	for (let piece of pieces) {
		let isPieceChosen = document.getElementById(piece + '-' + source).checked
		if (isPieceChosen) {
			selectedPieces.push(piece)
		}
	}

	if (selectedPieces.length >= 1){
		let count = 0;
		for (let saveRow of saveFile) {
			if (saveRow.some((canSavePiece, index) => selectedPieces.includes(saveFilePieceOrder[index]) && canSavePiece == "O")) { //saveFilePieceOrder should be TILJSZO but just to be safe
				count += 1 //at least one of the selected pieces can be saved
			}
		}
		display.innerHTML = '<strong>' + selectedPieces.join('') + '</strong>: ' + (count/(saveFile.length)*100).toFixed(2) + '%'
		display.classList.add('filled')
	} else {
		display.innerHTML = 'Select Save...'
		display.classList.remove('filled')
	}
}

function getSavesPercentage(source, usedPieces) {
	let rot = rotationMode == 'with180' ? '180' : '90'
	let saveFile = saveFiles[source + '-' + rot]
	let saveFilePieceOrder = saveFile.shift() //remove first line listing the tetrominos

	let count = 0;
	for (let saveRow of saveFile) {
		if (saveRow.some((coverResult, index) => usedPieces.includes(saveFilePieceOrder[index]) && coverResult == "O")) {
			count += 1 //at least one of the selected pieces can be saved
		}
	}

	return (count/(saveFile.length)*100).toFixed(2)
}

function loadSaveFiles() {
	let saveFileNames = []
	for (let saveElement of document.getElementsByTagName('saves')) {
		let sourceMain = saveElement.getAttribute('src')
		saveFileNames.push(sourceMain + '-90', sourceMain + '-180')
	}
	for (let saveFileName of saveFileNames) {
		let url = window.location.origin + '/h-docs/attachments_saves/' + saveFileName + '.csv'
		fetch(url)
			.then((response) => response.text())
			.then((text) => {
				saveFiles[saveFileName] = $.csv.toArrays(text)
			})
	}
	console.log(saveFileNames.length + ' save files loaded.')
}

function generateSaveInputs(){
	for (let saveTag of document.getElementsByTagName('saves')) {
		if (saveTag.childElementCount > 0) continue;
		let source = saveTag.getAttribute('src')

		let main = document.createElement('div') //this is needed to pin pieceContainer below the display
		main.id = source + '-main'
		main.classList.add('save-selection')

		let display = document.createElement('div')
		display.id = source + '-display'
		display.innerText = 'Select Save...'
		display.classList.add('save-selection')
		
		let pieceContainer = document.createElement('div')
		pieceContainer.id = source + '-container'
		pieceContainer.classList.add('save-input')
		pieceContainer.setAttribute('tabindex', '0')

		display.addEventListener('click', () => {
			pieceContainer.style.display = "grid"
			pieceContainer.focus()
		})
		pieceContainer.addEventListener('focusout', () => {
			pieceContainer.style.display = "none"
		})
		
		for (let piece of pieces) {
			let input = document.createElement('input')
			input.id = piece + '-' + source
			input.type = 'checkbox'
			input.addEventListener('click', () => getSaves(source))
			
			let label = document.createElement('label')
			label.htmlFor = piece + '-' + source
			
			let span = document.createElement('span')
			span.className = 'mino'
			span.innerText = piece
			
			label.append(span)
			pieceContainer.append(input, label)
		}

		main.append(pieceContainer)
		saveTag.append(display, main)
	}
}

generateSaveInputs()
loadSaveFiles()