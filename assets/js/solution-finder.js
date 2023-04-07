var solutionFiles = []

function selectSetup(source, setupCode){
    let selectionMain = document.getElementById('solution-finder-selection-main')
    let selectedSelectionFumen = document.getElementById(source + '-selection-fumen')
	let solutionFinderSetupImg = document.getElementsByClassName('solution-finder-display-image')[0]
    let rot = rotationMode == 'with180' ? '180' : '90'
    
	document.querySelectorAll('.selection-fumen').forEach(element => element.classList.remove('selected'))
    selectedSelectionFumen.classList.add('selection-fumen', 'selected')

    selectedFileName = source + '-' + rot
    if (mirrored) {
        selectedFileName += '-mirror'
        setupCode = mirrorFumen(setupCode)[0]
    }
    // this jankiness is because you can't call fumen canvas and are unable to use the default values set there
    let numrows = 5, numcols = 10, cellSize = 22, gridToggle = allGridToggle, gridColor = null, transparency_four = true, background = null, delay = 500, lock = false, outline = null
    solutionFinderSetupImg.setAttribute('data-code', setupCode)
    solutionFinderSetupImg.src = draw(decoder.decode(setupCode)[0], { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline }).toDataURL('image/png')
    getSolutions()
    selectionMain.classList.add('hidden')
}

function queueCompositionMatches(queueComposition, queue) { //checks if the queue is an element of the queueComposition pattern
    //support single pieces or portions of a full bag, delimited by commas.
    //doesn't support consecutive pieces yet
    let queueCompSegments = queueComposition.split(',')
    let stringGenerator = queue => (function* () { for (let piece of queue) { yield piece } })() //generator function to iterate through queue
    let queueIterator = stringGenerator(queue)

    for (let queueCompSegment of queueCompSegments) {
        if (queueCompSegment.length == 1) { //single piece
            let iterator = queueIterator.next()
            if (iterator.done) return false; //queue is shorter than pattern
            if (iterator.value != queueCompSegment) return false; //queue doesn't match pattern
        } else if (queueCompSegment.length == 3) { //*pX pattern
            let numPieces = parseInt(queueCompSegment[2])

            let cumulatedPieces = new Set()
            for (let i = 0; i < numPieces; i++) {
                let iterator = queueIterator.next()
                if (iterator.done) return false; //queue is shorter than pattern
                if (cumulatedPieces.has(iterator.value)) return false; //queue doesn't match pattern (no repeated pieces in bag)
                cumulatedPieces.add(iterator.value)
            }
        } else throw Error("Invalid queue composition segment: " + queueCompSegment)
    }
    //matched all segments
    return true;
}

function getSolutions(){
    solutionFilesLoaded.then(() => {
        //reads a solution file and displays solutions that cover the input queue.
        //the type column has two types of annotation: M(minimal) or X#<piece>(extra solve for saving <piece>)
        let outputs = document.getElementById('solution-finder-outputs')
        let queueInput = document.getElementsByClassName('solution-finder-input')[0]
        queueInput.value = queueInput.value.toUpperCase().replace(/[^TILJSZO]/,'') //update display
        let queue = queueInput.value

        let data = solutionFiles[selectedFileName]
        let firstCol = data.map(row => row[0])
        let queueIndex = firstCol.indexOf(queue)

        let queueCompRow = firstCol.indexOf('queuecomp')
        let queueComp = data[queueCompRow][1]
        
        let queueCompositionElement = document.getElementsByClassName('queue-composition')[0]
        queueCompositionElement.innerHTML = queueComp
        
        //if the queue matches the pattern, then continue processing, otherwise show the intended queue composition (instead of adding it when you don't find a match)
        if (queueCompositionMatches(queueComp, queue)) {
            queueCompositionElement.classList.add('hidden')
            outputs.innerHTML = ''

            let fumenRow = data[firstCol.indexOf('sequence')]
            let coverRow = data[firstCol.indexOf('cover')]
            let typeRow = data[firstCol.indexOf('type')]

            let coveringIndexes = data[queueIndex].flatMap((cell, index) => cell == 'O' ? index : [])
            for (let coveringIndex of coveringIndexes) {
                let fumen = fumenRow[coveringIndex]
                let cover = coverRow[coveringIndex]
                let type = typeRow[coveringIndex]

                let fig = document.createElement('figure')
                fig.classList.add('fumen-figure')
                {
                    let caption = document.createElement('figcaption')
                    {
                        let stats = document.createElement('div')
                        stats.classList.add('stat')
                        stats.innerHTML = '<strong>Cover</strong>: ' + cover
                        if (type) {stats.innerHTML += '<br>' + type.replace('M','Minimal').replace('X#','')}
                        caption.append(stats)
                    }

                    let fumenImg = document.createElement('img')
                    {
                        let numrows = 5, numcols = 10, cellSize = 15, gridToggle = false, gridColor = null, transparency_four = true, background = null, delay = 500, lock = false, outline = null
                        fumenImg.src = draw(decoder.decode(unglueFumen(fumen))[0], { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline }).toDataURL('image/png')
                        fumenImg.setAttribute('data-code', fumen)
                        fumenImg.classList.add('fumen-image')
                    }

                    fig.append(fumenImg, caption)
                }
                outputs.append(fig)
            }
            console.log(coveringIndexes.length + ' solutions found for ' + queue)
        } else {
            queueCompositionElement.classList.remove('hidden')
        }
    })
}

async function loadSolutionFiles() {
    let setupElements = Array.from(document.getElementsByClassName('setup-image'))
    let sourceFileNames = setupElements.map(element => element.children[0].getAttribute('id')) //only take the first image, the setups differ by spin but not shape
	let solutionFileNames = sourceFileNames.flatMap(sourceFileName => [sourceFileName + '-90', sourceFileName + '-180', sourceFileName + '-90-mirror', sourceFileName + '-180-mirror'])
	
    return Promise.allSettled(solutionFileNames.map(async solutionFileName => { //ignores all invalid files
        let url = window.location.origin + '/h-docs/attachments_solutions/' + solutionFileName + '.csv'

        return fetch(url)
            .then(response => response.text())
            .then(text => $.csv.toArrays(text))
            .then(csv => solutionFiles[solutionFileName] = csv)
    }))
}

const solutionFilesLoaded = new Promise((resolve, reject) => {
    loadSolutionFiles()
        .then(() => {
            let inputArea = document.getElementsByClassName('solution-finder-input')[0]
            inputArea.value = ''
            inputArea.disabled = false
            inputArea.classList.remove('solution-finder-loading')
            console.log(Object.keys(solutionFiles).length + ' solution files loaded.')
            resolve()
        })
})

function generatePCSF(){
    if (!document.getElementById('solution-finder')) throw Error("solution-finder should be present to include this script.") //solution finder is not present

    document.getElementsByClassName("solution-finder-display-image")[0].addEventListener('click', () => {
        document.getElementById('solution-finder-selection-main').classList.remove('hidden')
    })
    document.getElementsByClassName("solution-finder-input")[0].addEventListener('input', getSolutions)

    //take in all setup-image elements in the page as setups
    for (let setupElements of document.getElementsByClassName('setup-image')) {
        let setupName = setupElements.children[0].getAttribute('id')
        let setupCode = setupElements.children[0].getAttribute('src') //from <fumen> format
        let fumen = document.createElement('fumen')
        fumen.setAttribute('src', setupCode)
        fumen.setAttribute('id', setupName + '-selection-fumen')
        fumen.setAttribute('clipboard', false)
        fumen.addEventListener('click', () => selectSetup(setupName, setupCode))
        fumen.classList.add('selection-fumen')
        document.getElementById('solution-finder-selection').appendChild(fumen)
    }
    //temp arrangement to make preview image work
    let setupElements = document.getElementsByClassName('setup-image')[0]
    let setupName = setupElements.children[0].getAttribute('id')
    let setupCode = setupElements.children[0].getAttribute('src')
    //preview image
    let numrows = 5, numcols = 10, cellSize = 22, gridToggle = false, gridColor = null, transparency_four = true, background = null, delay = 500, lock = false, outline = null
    document.getElementsByClassName("solution-finder-display-image")[0].src = draw(decoder.decode(setupCode)[0], { numrows, numcols, cellSize, gridToggle, gridColor, transparency_four, background, delay, lock, outline }).toDataURL('image/png')
    selectSetup(setupName, setupCode)
}

generatePCSF()