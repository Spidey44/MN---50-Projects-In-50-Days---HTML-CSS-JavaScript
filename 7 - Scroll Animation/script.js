const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
    //window size height resolution at 888
    console.log(window.innerHeight)
    //trigger point at 532 
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        //is the top of the box less than the trigger bottom?
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

//Where in the DOM the element located?
//The Element.getBoundingClientRect() method returns a 
//DOMRect object providing information about the size 
//of an element and its position relative to the viewport.