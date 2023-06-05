const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
// node list to loop through
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    // loop through each node element and add class visible
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    // loop through each node and remove class visible
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})