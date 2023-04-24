// drawing shapes
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

// global variable to be reused
let size = 10
// initial mouse not pressed
let isPressed = false
let color = 'black'
let x
let y

// in case mouse is clicked, get the location values
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
    console.log(isPressed, x, y)
})

// in case mouse is NOT clicked, clear location values
canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
    console.log(isPressed, x, y)
})

// show the position where the mouse is
// draw cicle as i move the mouse
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        console.log(x2, y2)

        drawCircle(x2, y2)
        // otherwise, space wbetween the circle if go too fast with moveto arg
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    // x and y  passed in
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

// x move from/ move to
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    // * 2 makes the line size same as circle
    ctx.lineWidth = size * 2
    ctx.stroke()
}
//TEST 
//drawCircle(100, 200)
//drawLine (300, 300, 300, 500)
//drawLine (300, 300, 200, 500)

//HOLD AND DRAW BASED ON PARAMS SELECTED
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

// listen for a click on button event to increase by the size append 
// + update line value with updateSizeOnScreen()
increaseBtn.addEventListener('click', () => {
    size += 5
    // no more than 50
    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

// update the color on change with new value
colorEl.addEventListener('change', (e) => color = e.target.value)

// clear on click by  calling the ctx and clear fuction to 0 for entire canvas
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))
