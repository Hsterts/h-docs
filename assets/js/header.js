let mirrored = false;
let rotationMode = `with180`;

function toggleMirror(){
	mirrored = !mirrored;
	
	// for the solution finder //TODO: make solution-finder hook itself to this instead of the other way round
	let currentCode = document.getElementsByClassName('solution-finder-display-image')[0].dataset.code;
	let rot = rotationMode == 'with180' ? '-180' : '-90'
	let source = selectedFileName.replace(rot,'').replace('-mirror','')
	selectSetup(source, currentCode);
	getSolutions()
	
	// for the page elements
	var unmirroredElements = document.querySelectorAll('.unmirrored')
	var mirroredElements = document.querySelectorAll('.mirrored')
	if(!mirrored){
		unmirroredElements.forEach(element => element.classList.remove('hidden'))
		mirroredElements.forEach(element => element.classList.add('hidden'))
	} else {
		unmirroredElements.forEach(element => element.classList.add('hidden'))
		mirroredElements.forEach(element => element.classList.remove('hidden'))
	}
	formatPage();
}

function switchRotation(rot){
	rotationMode = rot
	var with180Toggle = document.getElementById('with-180-toggle')
	var no180Toggle = document.getElementById('no-180-toggle')
	var with180Elements = document.querySelectorAll('.with180')
  	var no180Elements = document.querySelectorAll('.no180')
	if (rot == 'with180') {
		with180Toggle.classList.remove('hidden')
		with180Elements.forEach(element => element.classList.remove('hidden'))
		no180Toggle.classList.add('hidden')
		no180Elements.forEach(element => element.classList.add('hidden'))
		selectedFileName = selectedFileName.replace('-90','-180')
		getSolutions()
	} else if (rot == 'no180') {
		with180Toggle.classList.add('hidden')
		with180Elements.forEach(element => element.classList.add('hidden'))
		no180Toggle.classList.remove('hidden')
		no180Elements.forEach(element => element.classList.remove('hidden'))
		selectedFileName = selectedFileName.replace('-180','-90')
		getSolutions()
	}
}

function toggleGrid(grid){
	var withGridToggle = document.getElementById('with-grid-toggle')
	var noGridToggle = document.getElementById('no-grid-toggle')
	if (grid == 'withGrid'){
		withGridToggle.classList.remove('hidden')
		noGridToggle.classList.add('hidden')
	  	allGridToggle = true;
	  	formatPage()
	} else if (grid == 'noGrid'){
		withGridToggle.classList.add('hidden')
		noGridToggle.classList.remove('hidden')
		allGridToggle = false;
		formatPage()
	}
}

window.addEventListener('load', () => {
	switchRotation('with180') //only hides static elements
	toggleGrid('noGrid')
})