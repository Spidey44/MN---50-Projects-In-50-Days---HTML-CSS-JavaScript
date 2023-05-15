// node list of all the numbers between span
const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()
// reset dom to initial state
function resetDOM() {
  // 1/4 reset dom to initial state
  counter.classList.remove('hide')
  // 2/4 reset dom to initial state
  finalMessage.classList.remove('show')

  // 3/4 clear the value for each num
  nums.forEach((num) => {
    num.classList.value = ''
  })

  // 4/4 add class in to the first span at index 0
  nums[0].classList.add('in')
}

function runAnimation() {
  // loop through node list -> num each individual item found + idx for each iteratioin starting at 0
  nums.forEach((num, idx) => {
    console.log("span element with num values", num)
    console.log("index values", idx)
    // total -1 to identify the last num
    const nextToLast = nums.length - 1

    // function fired when animation ended
    num.addEventListener('animationend', (e) => {
      // if in animation goIn + has reach last num
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
        // if animation go Out + has number coming next. Sibling = same level element
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}
// ehen click replay button reset DOM and run Animation
replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})
