
// insert hart in DOM 
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// click event listener on loveMe class
loveMe.addEventListener('click', (e) => {
    console.log(123)
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        console.log('value of click #1', clickTime)
    } else {
        // compare 2 click time
        // considered double click if time between less than 800
        if ((new Date().getTime() - clickTime) < 800) {
            console.log(234)
            // if less, call createHEart function
            createHeart(e)
            // reset if more
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

// create heart icon
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // get the click position in the entire vew port
    const x = e.clientX
    const y = e.clientY
    console.log("viewport position is ", x, y)

    // position from the left and top of container
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    console.log("static image position is ", leftOffset, topOffset)

    // calculate location within the image
    const xInside = x - leftOffset
    const yInside = y - topOffset
    console.log("position within image is ", xInside, yInside)

    // Set up the hart property position withing the image
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    // insert the heart created
    loveMe.appendChild(heart)

    // increment the time click displayed counter
    times.innerHTML = ++timesClicked

    // remove the inserted icon from the DOM
    setTimeout(() => heart.remove(), 1000)
}