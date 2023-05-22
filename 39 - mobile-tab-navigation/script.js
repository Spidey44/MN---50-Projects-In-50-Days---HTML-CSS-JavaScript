// bring node list of all images
const contents = document.querySelectorAll('.content')
// all list item
const listItems = document.querySelectorAll('nav ul li')

// loop through each item in the lost of 4 icons with item and it's index
listItems.forEach((item, idx) => {
    // Event Listener on icon listening to a click
    item.addEventListener('click', () => {
        // #1 - hide all + add show class in active
        hideAllContents()
        // #2 - hide all items
        hideAllItems()
        // #3 make class active on the clicked item
        item.classList.add('active')
        // #4 add show as per index from the for each
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    // loop through all the image and remove the class show
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    // loop through all the icon and remove the class active
    listItems.forEach(item => item.classList.remove('active'))
}