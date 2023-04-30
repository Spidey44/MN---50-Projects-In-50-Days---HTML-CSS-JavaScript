const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// how many slides (div) do we have in slide right?
const slidesLength = slideRight.querySelectorAll('div').length
console.log("4 slides? ", slidesLength)

// Which index is in view?
let activeSlideIndex = 0

// negative goes up 
// index 0 based -> length - 1
// 100 is view port height taken
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

// One side goes up, the other goes down
// both call same function with difference based on button clicked
upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    console.log('current location', sliderHeight)
    if (direction === 'up') {
        activeSlideIndex++
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
    // right side to go up
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}