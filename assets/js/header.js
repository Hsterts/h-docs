let mirrored = false;
let rotationMode = `with180`;

function toggleMirror(){
	var unmirroredElements = document.getElementById('unmirrored')
	var mirroredElements = document.getElementsByClassName('mirrored')
	if(!mirrored){
		for(let x = 0; x < unmirroredElements; x++){
			unmirroredElements[x].style.display = 'inline-block'
			mirroredElements[x].style.display = 'none'
		}
	} else {
		for(let x = 0; x < unmirroredElements; x++){
			unmirroredElements[x].style.display = 'none'
			mirroredElements[x].style.display = 'inline-block'
		}
	}
}

function switchRotation(rot){
	rotationMode = rot
	var with180Toggle = document.getElementById('with-180-toggle')
	var no180Toggle = document.getElementById('no-180-toggle')
	var with180Elements = document.getElementsByClassName('with180')
  	var no180Elements = document.getElementsByClassName('no180')
	if(rot == 'with180'){
	  	with180Toggle.setAttribute('class','rotation-logo logo hidden')
	  	no180Toggle.setAttribute('class','rotation-logo logo')
		for(let x = 0; x < with180Elements.length; x++){
			with180Elements[x].style.display = 'inline-block'
			no180Elements[x].style.display = 'none'
		}
	}
	if(rot == 'no180'){
		with180Toggle.setAttribute('class','rotation-logo logo')
		no180Toggle.setAttribute('class','rotation-logo logo hidden')
		for(let x = 0; x < with180Elements.length; x++){
			with180Elements[x].style.display = 'none'
			no180Elements[x].style.display = 'inline-block'
		}
	}
}

function toggleGrid(grid){
	var withGridToggle = document.getElementById('with-grid-toggle')
	var noGridToggle = document.getElementById('no-grid-toggle')
	if(grid == 'withGrid'){
	  	withGridToggle.setAttribute('class','grid-toggle-logo logo hidden')
	  	noGridToggle.setAttribute('class','gridtoggle logo')
	  	allGridToggle = true;
	  	formatPage()
	}
	else if(grid == 'noGrid'){
		withGridToggle.setAttribute('class','grid-toggle-logo logo')
		noGridToggle.setAttribute('class','grid-toggle-logo logo hidden')
		allGridToggle = false;
		formatPage()
	}
}