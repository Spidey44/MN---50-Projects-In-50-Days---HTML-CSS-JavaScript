// bring node list of all images
const contents = document.querySelectorAll('.content')
// all list item
const listItems = document.querySelectorAll('nav ul li')

// loop through each item in the lost of 4 icons with item and it's index
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        // on lick hide all + add show class in active
        hideAllContents()
        hideAllItems()
        // add class active on the clicked item
        item.classList.add('active')
        // as per index, add show class
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}