const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
// index variable initialized to 1
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    // split the text into letter W (from 0 to 1)
    textEl.innerText = text.slice(0, idx)

    idx++
    // if reach the end, reset index to 1, back to fist letter
    if (idx > text.length) {
        idx = 1
    }
    // wait time (speed) before calling new letter
    setTimeout(writeText, speed)
}

// event listen to speed input ( type or arrow key)
//
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)