"use strict"
var saveFiles = [] //cache save files used in this page
const pieces = Array.from('TILJSZO')

//currently only gets saves from the <saves>, make it a parameter
async function getSaves(saveTable) { //hooked to onclick event
	let display = saveTable.getElementsByClassName('saves-display')[0]
	let selectedPieces = pieces.filter(piece => saveTable.querySelector('input.' + piece).checked)

	if (selectedPieces.length == 0) { //no pieces selected
		display.innerHTML = 'Select Save...'
		display.classList.remove('filled')
	} else {
		let a = await getSavesStats(saveTable.getAttribute('src'), selectedPieces, rotationMode)
		let [ratio, percentage] = await getSavesStats(saveTable.getAttribute('src'), selectedPieces, rotationMode)
		display.innerHTML = '<strong>' + selectedPieces.join('') + '</strong>: ' + percentage
		display.title = ratio
		display.classList.add('filled')
	}
}

async function getSavesStats(source, savePieces, rotationMode) {
	return finishLoadingSaveFiles.then(() => {
		let rot = rotationMode == 'with180' ? '180' : '90'
		let saveFile = JSON.parse(JSON.stringify(saveFiles[source + '-' + rot]))
		let saveFilePieceOrder = saveFile.shift() //remove first line listing the tetrominos
	
		let count = 0;
		for (let saveRow of saveFile) {
			if (saveRow.some((coverResult, index) => savePieces.includes(saveFilePieceOrder[index]) && coverResult == "O")) {
				count += 1 //at least one of the selected pieces can be saved
			}
		}

		return [count + "/" + saveFile.length, (count/(saveFile.length)*100).toFixed(2) + "%"]
	})
}

async function loadSaveFiles() {
	let saveFileNames = []
	for (let saveTable of document.getElementsByClassName('saves-table')) {
		let sourceBase = saveTable.getAttribute('src')
		saveFileNames.push(sourceBase + '-90', sourceBase + '-180')
	}
	
	await Promise.all(
		saveFileNames.map(async saveFileName => {
			let url = window.location.origin + '/h-docs/attachments_saves/' + saveFileName + '.csv'
			return fetch(url)
				.then(response => response.text())
				.then(text => saveFiles[saveFileName] = $.csv.toArrays(text))
		})
	)
	console.log(saveFileNames.length, 'save files loaded.')
}

const finishLoadingSaveFiles = new Promise((resolve, reject) => {
	loadSaveFiles().then(() => resolve())
})

const saveTypes = {
	"save-t": "T", 
	"save-to": "TO", 
	"save-tio": "TIO", 
	"avoid-sz": "TILJO", 
	"save-osz": "OSZ"
};

window.addEventListener("DOMContentLoaded", () => {
	//custom save selection
    for (let saveTable of document.getElementsByClassName('saves-table')) {
        let display = saveTable.getElementsByClassName('saves-display')[0]
        let pieceContainer = saveTable.getElementsByClassName('saves-input')[0]

        display.addEventListener('click', () => pieceContainer.classList.toggle('hidden'))
		pieceContainer.addEventListener('click', () => getSaves(saveTable))
    }

	//dynamically add save percentages to save tables
	let insertSavePercentagePromises = []
	for (let saveTable of document.getElementsByClassName("saves-table")) {
		let saveFileSource = saveTable.getAttribute("src")
		if (!saveFileSource) continue; //temp fix for save tables not having a src attribute
		for (let [saveTitle, savePieces] of Object.entries(saveTypes)) {
			//dynamically find save percentages
			let with180Span = document.createElement("div")
			with180Span.classList.add("with180")
			
			let no180Span = document.createElement("div")
			no180Span.classList.add("no180")

			insertSavePercentagePromises.push(Promise.all([
				getSavesStats(saveFileSource, savePieces, 'with180').then(([ratio, percent]) => {
					with180Span.title = ratio
					with180Span.textContent = percent
				}),
				getSavesStats(saveFileSource, savePieces, 'no180').then(([ratio, percent]) => {
					no180Span.title = ratio
					no180Span.textContent = percent
				}),
			]).then(() => {
				saveTable.querySelector("#" + saveTitle).append(no180Span, with180Span)
			}))
		}
	}
	Promise.all(insertSavePercentagePromises).then(() => {
		switchRotation('with180')
	})
});