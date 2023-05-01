const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// how many slides (div) do we have in slide right? _> 4
const slidesLength = slideRight.querySelectorAll('div').length
console.log("4 slides? ", slidesLength)

// Which index has active class -> is in view?
// increment to 0 -> first slide
let activeSlideIndex = 0

// negative goes up 
// index 0 based -> length - 1 -> last index from 4 to 3
// 100 is view port height taken
// move initial slide to correct position
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// Flip buttons = One side goes up, the other goes down
// both call same function with difference based on button clicked
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    // gives slides location before decide 
    const sliderHeight = sliderContainer.clientHeight
    console.log('current location', sliderHeight)
    if (direction === 'up') {
        activeSlideIndex++
        // Compare slide index
        // if hit the top end, reset to 0
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        // if hit the bottom end, reset to 0
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    // negative -> right side to go up + left to go down
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}