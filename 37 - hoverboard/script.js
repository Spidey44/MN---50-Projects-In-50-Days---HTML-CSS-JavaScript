const container = document.getElementById('container')
// random color created
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
// 500 square to be out in screens
const SQUARES = 500

// as long as square less than 500, increment by one from 0
for (let i = 0; i < SQUARES; i++) {
    // create DOM element dic with class square
    const square = document.createElement('div')
    square.classList.add('square')

    // call function if hover over a square
    square.addEventListener('mouseover', () => setColor(square))
    // call function if hover out of a square
    square.addEventListener('mouseout', () => removeColor(square))

    // append all the square created
    container.appendChild(square)
}

function setColor(element) {
    console.log('123')
    console.log('add', element)
    const color = getRandomColor()
    console.log('color', color)
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    console.log('456')
    console.log('remove', element)
    // set original color + original boxshadow color
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

// from color array -> random index * length of the array(1-4)
function getRandomColor() {
    // round down with Math.floor()+ random number Math.random()
    return colors[Math.floor(Math.random() * colors.length)]
}