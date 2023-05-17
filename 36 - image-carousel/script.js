// image container for all images
const imgs = document.getElementById('imgs')
console.log(imgs)
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// all images in node list
const img = document.querySelectorAll('#imgs img')
console.log(img);
console.log(img[0])
console.log("total image", img.length)
// each image has index from 0 to last-1
let idx = 0

// run function is called every 2 secs
let interval = setInterval(run, 2000)

function run() {
    // increment the index by 1
    idx++
    // function change image by changing the translateX value
    changeImage()
}

function changeImage() {
    // reset index after pass last image
    // make total 4 image means index[3]
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        // reset index if pass first image
        idx = img.length - 1
    }

    // multiply by 500 px image size to move to the next img
    // initial image index 0 at 0px
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// reset when reach the end avoid time not reset bug
function resetInterval() {
    // JS function
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

// move right button Event listener
rightBtn.addEventListener('click', () => {
    // increment by one
    idx++
    changeImage()
    resetInterval()
})

// move left
leftBtn.addEventListener('click', () => {
    // increment by one
    idx--
    changeImage()
    resetInterval()
})