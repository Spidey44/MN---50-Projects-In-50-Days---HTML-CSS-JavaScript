const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  // clear the value for each num
  nums.forEach((num) => {
    num.classList.value = ''
  })

  // add class in to the first span at index 0
  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num, idx) => {
    console.log("index values", idx)
    console.log("num values", num)
    const nextToLast = nums.length - 1

    // function fired when animation ended
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})
