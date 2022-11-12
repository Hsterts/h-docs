function showElement(element){element.style.display = 'none'}
function hideElement(element){element.style.display = 'inline-block'}

function switchRotation(){
    var toggle = document.getElementById('rotationmode-toggle').checked
    var Rot180 = document.getElementsByClassName('Rot180')
    var Rot90 = document.getElementsByClassName('Rot90')
    if(toggle){
        for(element in Rot180){hideElement(element)}
        for(element in Rot90){showElement(element)}
    } else {
        for(element in Rot180){showElement(element)}
        for(element in Rot90){hideElement(element)}
    }
}