function showElement(element){element.style.display = 'none'}
function hideElement(element){element.style.display = 'inline-block'}

function switchRotation(){
    var toggle = document.getElementById('rotationmode-toggle').checked
    var Rot180 = document.getElementsByClassName('Rot180')
    var Rot90 = document.getElementsByClassName('Rot90')
    if(toggle){
        Rot180.forEach(hideElement)
        Rot90.forEach(showElement)
    } else {
        Rot180.forEach(showElement)
        Rot90.forEach(hideElement)
    }
}