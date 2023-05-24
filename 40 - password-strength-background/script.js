// password input
const password = document.getElementById('password')
// background contain image
const background = document.getElementById('background')
// EL on password input -> fire off on any input
password.addEventListener('input', (e) => {
  // -> 1- get the input value in new const
  const input = e.target.value
  console.log('show typing', input)
  // -> 2- get the length  in new const
  const length = input.length
  console.log('show length', length)
  // -> 3- Calculate new blur value decremented 2 for each new charin new const
  // decrease blur decrement -2 for each char -> 18, 16, 14, 12, 
  const blurValue = 20 - length * 2
  console.log('calculation remove blur', 20 - length)
  // -> 4- replace the old 20 value by newest  blur value
  background.style.filter = `blur(${blurValue}px)`
})
