solutionFiles = []

function selectSetup(source, setupCode){
    let selectionMain = document.getElementById('solution-finder-selection-main')
	let selectionFumens = [...document.getElementsByClassName('selection-fumen')]
    let selectedSelectionFumen = document.getElementById(source + '-selection-fumen')
	let solutionFinderSetupImg = document.getElementsByClassName('solution-finder-display-image')[0]
    let rot = rotationMode == 'with180' ? '-180' : '-90'
    for(let i = 0; i < selectionFumens.length; i++){selectionFumens[i].className = 'selection-fumen'}
    selectedSelectionFumen.className = 'selection-fumen selected'
    selectedFileName = source + rot
    let numrows = 5, numcols = 10, cellSize = 22, gridToggle = false, gridColor = null, transparency_four = true, background = null, delay = 500, lock = false, outline = null
    solutionFinderSetupImg.src = draw(decoder.decode(setupCode)[0], { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline }).toDataURL('image/png')
    selectionMain.style.display = 'none'
}   

function getSolutions(){
    let query = document.getElementsByClassName('solution-finder-input')[0]
    let queue = query.value
    let fileIndex = Object.keys(solutionFiles).indexOf(selectedFileName)
    if(queue.length == 7){
    }
}

function loadSolutionFiles() {
    let data = []
	let setupElements = Array.from(document.getElementsByClassName('setup-image'), (el) => el.children[0].getAttribute('id'))
	let solutionFileNames = []
	for(let i = 0; i < setupElements.length; i++){
		let sourceMain = setupElements[i]
		let source90 = sourceMain + '-90'
		let source180 = sourceMain + '-180'
		solutionFileNames.push(source90)
		solutionFileNames.push(source180)
	}
	for(let i = 0; i < solutionFileNames.length; i++){
		let solutionFileName = solutionFileNames[i]
		let url = window.location.origin + '/h-docs/attachments_solutions/' + solutionFileName + '.csv'
		fetch(url)
			.then((r) => r.text())
			.then((t) => {
				data = $.csv.toArrays(t)
				solutionFiles[solutionFileName] = data
			})
	}
	console.log(solutionFileNames.length + ' solution files loaded.')
}

function generatePCSF(){
        let base = document.getElementById('solution-finder-base')
        if(base){
        loadSolutionFiles()
        let section = document.createElement('section')
        section.setAttribute('id','solution-finder')
        let body = document.createElement('div')
        body.setAttribute('class','solution-finder-body')
        let solutionFinder = document.createElement('div')
        solutionFinder.setAttribute('class','pc-solution-finder')
        let solutionFinderTitle = document.createElement('h2')
        solutionFinderTitle.setAttribute('class','solution-finder-title')
        solutionFinderTitle.innerText = 'Solution Finder'
        let solutionFinderQuery = document.createElement('div')
        solutionFinderQuery.setAttribute('class','solution-finder-query')
        let solutionFinderDisplay = document.createElement('div')
        solutionFinderDisplay.setAttribute('id','solution-finder-display')
        let solutionFinderDisplayTitle = document.createElement('h3')
        solutionFinderDisplayTitle.setAttribute('class','solution-finder-display-title')
        solutionFinderDisplayTitle.innerText = 'Selected Setup'
        let solutionFinderDisplayImage = document.createElement('img')
        solutionFinderDisplayImage.setAttribute('class','solution-finder-display-image')
        solutionFinderDisplayImage.setAttribute('onclick','document.getElementById("solution-finder-selection-main").style.display = ""')
        let solutionFinderSelectionMain = document.createElement('div')
        solutionFinderSelectionMain.setAttribute('id','solution-finder-selection-main')
        let solutionFinderSelectionBody = document.createElement('div')
        solutionFinderSelectionBody.setAttribute('id','solution-finder-selection-body')
        let solutionFinderSelectionTitle = document.createElement('h2')
        solutionFinderSelectionTitle.setAttribute('class','solution-finder-selection-title')
        solutionFinderSelectionTitle.innerText = 'Setup Selection'
        let solutionFinderSelection = document.createElement('div')
        solutionFinderSelection.setAttribute('id','solution-finder-selection')
        
        let solutionFinderInputBody = document.createElement('div')
        solutionFinderInputBody.setAttribute('class','solution-finder-input-body')
        let solutionFinderInputTitle = document.createElement('h3')
        solutionFinderInputTitle.setAttribute('class','solution-finder-input-title')
        solutionFinderInputTitle.innerText = 'Input'
        let solutionFinderInputDiv = document.createElement('div')
        solutionFinderInputDiv.setAttribute('style','display: flex; flex-direction: row;')
        let solutionFinderInputQueue = document.createElement('div')
        solutionFinderInputQueue.setAttribute('class','input-item')
        let solutionFinderInputQueueTitle = document.createElement('b')
        solutionFinderInputQueueTitle.innerText = 'Queue'
        let solutionFinderInputTextarea = document.createElement('textarea')
        solutionFinderInputTextarea.setAttribute('class','solution-finder-input') 
        solutionFinderInputTextarea.setAttribute('maxlength','7')
        solutionFinderInputTextarea.addEventListener('input', getSolutions)
        
        let divider = document.createElement('hr')
        divider.setAttribute('class', 'small divider')
        let solutionFinderOutputs = document.createElement('div')
        solutionFinderOutputs.setAttribute('class', 'solution-finder-outputs')
        
        base.appendChild(section)
            section.appendChild(body)
                body.appendChild(solutionFinder)
                    solutionFinder.appendChild(solutionFinderTitle)
                    solutionFinder.appendChild(solutionFinderQuery)
                        solutionFinderQuery.appendChild(solutionFinderDisplay)
                            solutionFinderDisplay.appendChild(solutionFinderDisplayTitle)
                            solutionFinderDisplay.appendChild(solutionFinderDisplayImage)
                            solutionFinderDisplay.appendChild(solutionFinderSelectionMain)
                            solutionFinderSelectionMain.appendChild(solutionFinderSelectionBody)
                                    solutionFinderSelectionBody.appendChild(solutionFinderSelectionTitle)
                                    solutionFinderSelectionBody.appendChild(solutionFinderSelection)
                        solutionFinderQuery.appendChild(solutionFinderInputBody)
                            solutionFinderInputBody.appendChild(solutionFinderInputTitle)
                            solutionFinderInputBody.appendChild(solutionFinderInputDiv)
                                solutionFinderInputDiv.appendChild(solutionFinderInputQueue)
                                    solutionFinderInputQueue.appendChild(solutionFinderInputQueueTitle)
                                    solutionFinderInputQueue.appendChild(solutionFinderInputTextarea)
                    solutionFinder.appendChild(divider)
                    solutionFinder.appendChild(solutionFinderOutputs)
        
        let setupElements = document.getElementsByClassName('setup-image')
        for(let i = 0; i < setupElements.length; i++){
            let setupName = setupElements[i].children[0].getAttribute('id')
            let setupCode = setupElements[i].children[0].innerText
            let fumen = document.createElement('fumen')
            fumen.innerText = setupCode
            fumen.setAttribute('id', setupName + '-selection-fumen')
            fumen.setAttribute('clipboard', false)
            fumen.setAttribute('onclick','selectSetup("' + setupName + '", "' + setupCode + '")')
            fumen.className = 'selection-fumen'
            solutionFinderSelection.appendChild(fumen)
            if(i == 0){
                let numrows = 5, numcols = 10, cellSize = 22, gridToggle = false, gridColor = null, transparency_four = true, background = null, delay = 500, lock = false, outline = null
                solutionFinderDisplayImage.src = draw(decoder.decode(setupCode)[0], { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline }).toDataURL('image/png')
                selectSetup(setupName, setupCode)
            }
        }
    }
}

generatePCSF()