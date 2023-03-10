const panels = document.querySelectorAll('.panel')
console.log(panels.length) //select all the cards with panels;

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log('test click');
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        console.log(panel.classList);
        panel.classList.remove('active')
    })
}