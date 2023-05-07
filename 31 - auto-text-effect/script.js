const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
// text typed out
const text = 'We Love Programming!'
// Where are we in the text. index variable initialized to 1
let idx = 1
// 1000 speed is one sec
let speed = 300 / speedEl.value

writeText()

function writeText() {
    // split the text into letter W (cut from 0 to 1)
    // slice takes the range of the text (start, end)
    textEl.innerText = text.slice(0, idx)

    idx++
    // if reach the end, reset index to 1, back to fist letter
    if (idx > text.length) {
        // if true start over
        idx = 1
    }
    // wait time (speed) before calling new letter
    setTimeout(writeText, speed)
}

// event listen to number (speed) input ( type or arrow key)

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)