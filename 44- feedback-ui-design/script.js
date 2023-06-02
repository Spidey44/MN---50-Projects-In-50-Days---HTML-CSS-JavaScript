// event bubbling and event propagation vs event listener
// -> fire of for element + parents ( here panel parent of btn)

// node list with 3 emotions 
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
// save the rating emotion default satisfied on page load
let selectedRating = 'Satisfied'

// event listener doable wit ratings. but create error due to parent
ratingsContainer.addEventListener('click', (e) => {
    console.log("test1 show target clicked", e.target)
    console.log("test2", e.target.classList)
    console.log("test3", e.target.parentNode.classList)
    // event bubbling propagate in container but capture target clicked
    if (e.target.parentNode.classList.contains('rating')) {
        // go through each node and remove class
        removeActive()
        e.target.parentNode.classList.add('active')
        // update the emotion name. take next Sibling element which is name in small tag
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log("test4", e.target.nextElementSibling)
        console.log("test5", selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    // replacing the panel element on click
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    // go through each node and remove class
    for (let i = 0; i < ratings.length; i++) {
        // node list
        ratings[i].classList.remove('active')
    }
}