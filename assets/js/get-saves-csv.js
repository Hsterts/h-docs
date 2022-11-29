saveFiles = []
data = []

function getSaves(source){
	let display = document.getElementById(source + '-display')
	let rot = document.getElementById('rotationmode-toggle').checked ? '90' : '180'
	let selection = []
	for(let i = 0; i < 7; i++){
		let input = document.getElementById('TILJSZO'[i] + '-' + source).checked
		if(input){selection.push('TILJSZO'[i])}
	}
	if(selection.length){
		let toCall = source + '-' + rot
		let file = saveFiles[toCall]
		let count = 0;
		for(let i = 0; i < file.length - 1; i++){
			let row = file[i + 1]
			let cover = 0
			for(let x = 0; x < selection.length; x++){
				let column = 'TILJSZO'.indexOf(selection[x])
				if(row[column] == 'O'){cover = 1}
			}
			count += cover;
		}
		display.innerHTML = '<strong>' + selection.join('') + '</strong>: ' + (count/(file.length-1)*100).toFixed(2) + '%'
		display.className = 'save-selection filled'
	} else {
		display.innerHTML = 'Select Save...'
		display.className = 'save-selection'
	}
}

function loadSaveFiles() {
	let saveElements = document.getElementsByTagName('saves')
	let saveFileNames = []
	for(let i = 0; i < saveElements.length; i++){
		let sourceMain = saveElements[i].getAttribute('src')
		let source90 = sourceMain + '-90'
		let source180 = sourceMain + '-180'
		saveFileNames.push(source90)
		saveFileNames.push(source180)
	}
	for(let i = 0; i < saveFileNames.length; i++){
		let saveFileName = saveFileNames[i]
		let url = window.location.origin + '/h-docs/attachments_saves/' + saveFileName + '.csv'
		fetch(url)
			.then((r) => r.text())
			.then((t) => {
				data = $.csv.toArrays(t)
				saveFiles[saveFileName] = data
			})
	}
	console.log(saveFileNames.length + ' save files loaded.')
}

function generateSaveInputs(){
	let saveTags = document.getElementsByTagName('saves')
	for(let i = 0; i < saveTags.length; i++){
		if(saveTags[i].children.length > 0) continue
		let source = saveTags[i].getAttribute('src')
		let main = document.createElement('div')
		main.id = source + '-main'
		main.className = 'save-selection'
		let display = document.createElement('div')
		display.id = source + '-display'
		display.innerText = 'Select Save...'
		display.className = 'save-selection'
		display.setAttribute('onclick','document.getElementById("' + source + '-inputs").style.display = "grid"; document.getElementById("' + source + '-inputs").focus()')
		let inputs = document.createElement('div')
		inputs.className = 'save-input'
		inputs.id = source + '-inputs'
		inputs.setAttribute('tabindex', '0')
		inputs.setAttribute('onblur','document.getElementById("' + source + '-inputs").style.display = "none";')
		for(let x = 0; x < 7; x++){
			let piece = 'TILJSZO'[x]
			let input = document.createElement('input')
			input.id = piece + '-' + source
			input.type = 'checkbox'
			input.setAttribute('onclick', "getSaves('" + source + "')")
			
			let label = document.createElement('label')
			label.setAttribute('for', piece + '-' + source)
			
				let span = document.createElement('span')
				span.className = 'mino'
				span.innerText = piece
			
			inputs.append(input)
			inputs.append(label)
			label.append(span)
		}
		saveTags[i].append(display)
		main.append(inputs)
		saveTags[i].append(main)
	}
}

generateSaveInputs()
loadSaveFiles()