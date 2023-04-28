const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

console.log('initial position', window.scrollY, nav.offsetHeight)

function fixNav() {
    console.log('dynamic position', window.scrollY, nav.offsetHeight)
    //+150 area below navbar 
    // when hit point, add class active
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}