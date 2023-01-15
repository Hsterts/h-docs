currentPanel = 1
panels = [...document.getElementsByClassName('panel')]
panelCount = panels.length

leftNav = document.getElementById('left-nav')
rightNav = document.getElementById('right-nav')

// setting panels
for(let i = 0; i < panels.length; i++){panels[i].setAttribute('id','panel-' + (i + 1)); panels[i].setAttribute('style','transform: scale(0.8) translateX(0%); opacity: 0;')}
panels[0].style.transform = 'scale(1) translateX(-85%) translateY(50%)'
panels[0].style.opacity = '1'

function moveLeft(){
    if(currentPanel != 1){
        let toFade = document.getElementById('panel-' + currentPanel)
        let toShow = document.getElementById('panel-' + (currentPanel - 1))
        toFade.style.transform = 'scale(0.8) translateX(0%) translateY(25%)'
        toFade.style.opacity = '0'
        toShow.style.transform = 'scale(1) translateX(-85%) translateY(50%)'
        toShow.style.opacity = '1'
        leftNav.style.opacity = '1'
        leftNav.style.cursor = 'pointer'
        if(currentPanel == panelCount){
            rightNav.style.opacity = '1'
            rightNav.style.cursor = 'pointer'
        }
        if(currentPanel == 2){
            leftNav.style.opacity = '0.1'
            leftNav.style.cursor = 'default'
        }
        currentPanel--;
    }
}

function moveRight(){
    if(currentPanel != panelCount){ 
        let toFade = document.getElementById('panel-' + currentPanel)
        let toShow = document.getElementById('panel-' + (currentPanel + 1))
        toShow.style.transform = 'scale(1) translateX(-85%) translateY(50%)'
        toShow.style.opacity = '1'
        toFade.style.transform = 'scale(0.8) translateX(-212%) translateY(25%)'
        toFade.style.opacity = '0'
        rightNav.style.opacity = '1'
        rightNav.style.cursor = 'pointer'
        if(currentPanel == 1){
            leftNav.style.opacity = '1'
            leftNav.style.cursor = 'pointer'
        }
            if(currentPanel == panelCount - 1){
            rightNav.style.opacity = '0.1'
            rightNav.style.cursor = 'default'
        }
        currentPanel++;
    }
}

function seekPanel(index){
    var toSeek = index - currentPanel;
    if(toSeek > 0){for(let i = 0; i < toSeek; i++){moveRight()}} else if(toSeek < 0){for(let i = 0; i > toSeek; i--){moveLeft()}}
}

function seekFromURL(){
    let panel = window.location.href.split('#')[1]
    switch(panel){
        case 'practice':
            seekPanel(2)
            break;
        case 'setups':
            seekPanel(3)
            break;
        case 'research':
            seekPanel(4)
            break;
        case 'misc':
            seekPanel(5)
            break;
        case 'clients':
            seekPanel(6)
            break;
    }
}

seekFromURL()