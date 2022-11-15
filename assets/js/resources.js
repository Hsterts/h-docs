currentPanel = 1
panels = [...document.getElementsByClassName('panel')]
panelCount = panels.length

leftNav = document.getElementById('left-nav')
rightNav = document.getElementById('right-nav')

// setting panels
for(let i = 0; i < panels.length; i++){panels[i].setAttribute('id','panel-' + (i + 1)); panels[i].style.transform = 'scale(0.8) translateX(0%)'}
panels[0].style.transform = 'scale(1) translateX(-85%)'
panels[0].style.opacity = '1'

function moveLeft(){
    if(currentPanel != 1){
        let toFade = document.getElementById('panel-' + currentPanel)
        let toShow = document.getElementById('panel-' + (currentPanel - 1))
        toFade.style.transform = 'scale(0.8) translateX(0%)'
        toFade.style.opacity = '0'
        toShow.style.transform = 'scale(1) translateX(-85%)'
        toShow.style.opacity = '1'
        leftNav.style.opacity = '1'
        leftNav.style.cursor = 'pointer'
        if(currentPanel == panelCount){
            rightNav.style.opacity = '1'
            rightNav.style.cursor = 'pointer'
        }
        if(currentPanel == 2){
            leftNav.style.opacity = '0.3'
            leftNav.style.cursor = 'default'
        }
        currentPanel--;
    }
}

function moveRight(){
    if(currentPanel != panelCount){ 
        let toFade = document.getElementById('panel-' + currentPanel)
        let toShow = document.getElementById('panel-' + (currentPanel + 1))
        toShow.style.transform = 'scale(1) translateX(-85%)'
        toShow.style.opacity = '1'
        toFade.style.transform = 'scale(0.8) translateX(-212%)'
        toFade.style.opacity = '0'
        rightNav.style.opacity = '1'
        rightNav.style.cursor = 'pointer'
        if(currentPanel == 1){
            leftNav.style.opacity = '1'
            leftNav.style.cursor = 'pointer'
        }
            if(currentPanel == panelCount - 1){
            rightNav.style.opacity = '0.3'
            rightNav.style.cursor = 'default'
        }
        currentPanel++;
    }
}

function seekPanel(index){
    var toSeek = index - currentPanel;
    if(toSeek > 0){for(let i = 0; i < toSeek; i++){moveRight()}} else if(toSeek < 0){for(let i = 0; i > toSeek; i--){moveLeft()}}
}

function openCard(card){
    var clientCards = [...document.getElementsByClassName('client-card')]
    var selectedCard = document.getElementById(card + '-Link')
    var selectedCardLogo = selectedCard.children[0]
    var selectedCardLogoText = selectedCardLogo.children[1]
    if(selectedCardLogoText.style.opacity == '1'){
        for(let i = 0; i < clientCards.length; i++) {clientCards[i].style.visibility = 'hidden'}
        selectedCard.style.visibility = ''
        selectedCard.style.width = '600px'
        selectedCard.style.height = '600px'
        selectedCard.style.textAlign = 'left'
        selectedCardLogo.style.width = '245px'
        selectedCardLogo.style.height = '245px'
        selectedCardLogo.style.transform = 'scale(0.50)'
        selectedCardLogoText.style.opacity = '0'
        switch(card){
            case 'Tetrio':
                selectedCard.style.transform = 'translateX(-300px)';
                break;
            case 'Fourtris':
                selectedCard.style.transform = 'translateY(-300px)';
                break;
            case 'Himitsu':
                selectedCard.style.transform = 'translateX(-300px) translateY(-300px)';
                break;
        }
    } else {
        for(let i = 0; i < clientCards.length; i++) {clientCards[i].style.visibility = ''}
        selectedCard.style.width = '300px'
        selectedCard.style.height = '300px'
        selectedCard.style.textAlign = 'center'
        selectedCard.style.transform = 'translateX(0px) translateY(0px)';
        selectedCardLogo.style.width = '270px'
        selectedCardLogo.style.height = '290px'
        selectedCardLogo.style.transform = 'scale(1)'
        selectedCardLogoText.style.opacity = '1'
    }
}