let openButton = document.querySelector ('.popup_open')
let overlay = document.querySelector ('.overlay')
let closeButton = document.querySelector ('.popup_close')




openButton.addEventListener('click', () => {
    
    overlay.classList.add('overlay_active')
    
})


closeButton.addEventListener('click', () => {
    
    overlay.classList.remove('overlay_active')
    
})

