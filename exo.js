const contenu = document.querySelector('.container')
const change = document.querySelector('.search')

change.addEventListener('click', () => {
    contenu.classList.toggle('active')
})