
// insert hart in DOM 
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

// click event listener on loveMe class
// easier is event double click ->" bdclick"
loveMe.addEventListener('click', (e) => {
    console.log("clicked", 123)
    // test time between click. if short release heart
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        // works only once inside if statement cox no longer equal to 0
        console.log('value of initial click #1', clickTime)
    } else {
        // if 2nd click, not equal to 0, compare 2 click time
        // considered double click if time between less than 800
        if ((new Date().getTime() - clickTime) < 800) {
            console.log('value of click #2 short wait', clickTime)
            // if less, call createHEart function
            createHeart(e)
            // reset if more
            clickTime = 0
            console.log('reset click #2 short wait', clickTime)
        } else {
            clickTime = new Date().getTime()
            console.log('value of click #3 long wait ', clickTime)
        }
    }
})

// create heart icon with arrow function
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

    // Set up the hart property position relative within the image
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    // insert the heart created
    loveMe.appendChild(heart)

    // increment the time by 1 click displayed counter
    times.innerHTML = ++timesClicked

    // remove the inserted icon from the DOM. Otherwise accumulate after disappear
    setTimeout(() => heart.remove(), 1000)
}