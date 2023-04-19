const body = document.body
//slides is node list
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  // as i change setBgToBody(), increment activeSlide ( middle image)
  activeSlide++
  console.log("slides + " + slides)
  //Executes a provided function once per NodeList element, passing the element as an argument to the function.
  slides.forEach(slide => console.log("test dir", slide.parentElement))
  console.log("first + " + activeSlide)

  //active list retruns to 0, starts over after last
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  // initial when set to 0
  setBgToBody()
  console.log("second + ", activeSlide)
  setActiveSlide()
  console.log("third + ", activeSlide)
})

leftBtn.addEventListener('click', () => {
  // as i change setBgToBody(), decrement activeSlide ( middle image)
  activeSlide--

  //active list retruns to last, starts over before first
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  // initial when set to 0
  setBgToBody()
  setActiveSlide()
})

setBgToBody()

//when called, it adds background image css on node list
function setBgToBody() {
  // slides node list[index] start at 0
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  // loop through all the list and remove
  slides.forEach((slide) => slide.classList.remove('active'))
  // then add slide in active
  slides[activeSlide].classList.add('active')
}
