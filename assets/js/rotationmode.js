const userSpinPref = window.matchMedia('(prefers-spin-scheme: 180)').matches ? '180' : '90'
const currentSpin = localStorage.getItem('spin') ?? userSpinPref

if (currentRotation) {
  document.documentElement.setAttribute('saved-rotation', currentRotation);
}

const switchRotation = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('saved-rotation', '90');
    localStorage.setItem('rotation', '90');
  }
  else {
    document.documentElement.setAttribute('saved-rotation', '180')
    localStorage.setItem('rotation', '180')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Darkmode toggle
  const toggleRotationSwitch = document.querySelector('#rotationmode-toggle')

  // listen for toggle
  toggleRotationSwitch.addEventListener('change', switchRotation, false)

  if (currentRotation === 'dark') {
    toggleRotationSwitch.checked = true
  }
})