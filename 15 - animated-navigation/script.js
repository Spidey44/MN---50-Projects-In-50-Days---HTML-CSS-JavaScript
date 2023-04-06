const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
//event listener so if click is toggled the active class ( add or remove)
toggle.addEventListener('click', () => nav.classList.toggle('active'))
