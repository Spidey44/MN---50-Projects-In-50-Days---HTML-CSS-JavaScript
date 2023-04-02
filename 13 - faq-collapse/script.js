// 1- bring the toggle button wit Query elector create list
// 2- Loop through nodelist(forEach)
// 3- ass click with eventlistnener
// 4- toggle the active class on the parent node parentNode & classList.toggle()

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        //toggle method makes it easier to add and remove
        toggle.parentNode.classList.toggle('active')
    })
})