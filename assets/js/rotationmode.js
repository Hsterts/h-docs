function showElement(element){element.style.display = 'none'}
function hideElement(element){element.style.display = 'inline-block'}

function switchRotation(){
    var toggle = document.getElementById('rotationmode-toggle').checked
    var Icon180 = document.getElementById('90icon')
    var Icon90 = document.getElementById('180icon')
    var Rot180 = document.getElementsByClassName('Rot180')
    var Rot90 = document.getElementsByClassName('Rot90')
    if(toggle){
        if(Rot180.length != 0){for(element in Rot180){hideElement(element)}}
        if(Rot90.length != 0){for(element in Rot90){showElement(element)}}
        Icon180.style.opacity = 1
        Icon90.style.opacity = 0
    } else {
        if(Rot180.length != 0){for(element in Rot180){showElement(element)}}
        if(Rot90.length != 0){for(element in Rot90){hideElement(element)}}
        Icon180.style.opacity = 0
        Icon90.style.opacity = 1
    }
}