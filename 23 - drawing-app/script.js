// drawing shapes
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

// 1- Select Canvas
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

//  2- Bring context with get context
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
    //get the mouse position and set x and y
    x = e.offsetX
    y = e.offsetY
    console.log(' is pressed then position X Y', isPressed, x, y)
})

// in case mouse is NOT clicked, clear location values
canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    //set mouse x and y location to undefined
    x = undefined
    y = undefined
    console.log(' mouse released X Y undefined', isPressed, x, y)
})

// show the position where the mouse is
// draw cicle as i move the mouse
canvas.addEventListener('mousemove', (e) => {
    // if pressed, draw circle
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        console.log(' is pressed 2 then position X Y', x2, y2)

        drawCircle(x2, y2)
        // otherwise, space between the circle if go too fast with moveto arg
        // x, y move to + x2, y2 draw line,
        drawLine(x, y, x2, y2)

        // otherwise, weird effect of wide drawing if position not set
        x = x2
        y = y2
    }
})

// 3- bring properties from the context -> below create green rectangle 
// ctx.fill.style = "green" change color
//ctx.fillRect (10 from X axe,10 from y axe,10 is width,10 height) define rectrectangle 

// -> below create circle 
// ctx.fill.style = "green" change color
//ctx.fillRect (10 from X axe,10 from y axe,10 is width,10 height) define rectrectangle 


function drawCircle(x, y) {
    ctx.beginPath();
    // x and y  passed in position of circle + start and end angle + clock orientation
    ctx.arc(x, y, size, 0, Math.PI * 2., true)
    //x and y is positioning of the circle
    ctx.fillStyle = color
    ctx.fill()
}

// x move from/ move to
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    // boarder to fill the drawing line
    ctx.strokeStyle = color
    // * 2 makes the line size same width as circle
    ctx.lineWidth = size * 2
    ctx.stroke()
}
//TEST 
//drawCircle(100, 200)
//drawLine (300, 300, 300, 500) vertical
//drawLine (300, 300, 200, 500) diagonal

//HOLD AND DRAW BASED ON PARAMS SELECTED
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

// listen for a click on button event to increase by the size append 
// + update line value with updateSizeOnScreen()
increaseBtn.addEventListener('click', () => {
    size += 5
    // if size more than 50, set to 50
    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size < 5) {
        // if size less than 5, set to 5
        size = 5
    }

    updateSizeOnScreen()
})

// update the colorEl on change with new value
colorEl.addEventListener('change', (e) => color = e.target.value)

// clear on click by  calling the ctx and clear function to 0 for entire canvas
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))
