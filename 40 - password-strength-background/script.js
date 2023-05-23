const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  console.log('show typing', input)
  const length = input.length
  console.log('show length', length)
  const blurValue = 20 - length * 2
  console.log('calculation remove blur', 20 - length)
  // decrease blurr increment by 2 -> 18, 16, 14, 12, 10...0
  background.style.filter = `blur(${blurValue}px)`
})
