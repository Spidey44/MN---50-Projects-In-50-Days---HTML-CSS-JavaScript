const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//event listener on button ( click 
//+ action toggle class "active" ( add/ remove))
//+ action force focus on search input
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})