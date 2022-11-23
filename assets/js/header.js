let mirrored = false;

function mirrorDiagram() {
	mirrored = document.getElementById('mirror-toggle').checked;
	formatPage();
}

function switchRotation() {
	var toggle = document.getElementById('rotationmode-toggle').checked;
	var rotationModeDiv = document.getElementsByClassName('rotationmode')[0];
	var Icon180 = document.getElementById('180icon');
	var Icon90 = document.getElementById('90icon');
	var Rot180 = document.getElementsByClassName('Rot180');
	var Rot90 = document.getElementsByClassName('Rot90');
	if (toggle) {
		console.log('Disabled 180s');
		rotationModeDiv.setAttribute('title', 'Turn on 180 rotations. Primarily affects percentages.');
		if (Rot180.length != 0) {
			for (let i = 0; i < Rot180.length; i++) {
				Rot180[i].style.display = 'none';
			}
		}
		if (Rot90.length != 0) {
			for (let i = 0; i < Rot90.length; i++) {
				Rot90[i].style.display = 'inline-block';
			}
		}
		Icon180.style.opacity = 1;
		Icon90.style.opacity = 0;
	} else {
		console.log('Enabled 180s');
		rotationModeDiv.setAttribute('title', 'Turn off 180 rotations. Primarily affects percentages.');
		if (Rot180.length != 0) {
			for (let i = 0; i < Rot180.length; i++) {
				Rot180[i].style.display = 'inline-block';
			}
		}
		if (Rot90.length != 0) {
			for (let i = 0; i < Rot90.length; i++) {
				Rot90[i].style.display = 'none';
			}
		}
		Icon180.style.opacity = 0;
		Icon90.style.opacity = 1;
	}
}