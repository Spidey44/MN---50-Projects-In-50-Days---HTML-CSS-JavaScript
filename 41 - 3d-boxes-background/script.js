const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

// EL toggle class big on click button
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  // create 4 boxes for each 4 rows = loop total 16x
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      console.log("16 boxes with class", box)
      // background position has x value ( with J) and y property ( with I)
      // add positioning to each box. All negative values. Onx and Y
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()

// background position has x and y property
// values bgd position 0-0, -125-0, -2500, -375-0
// values bgd position 0--125, -125--125, -250--125, -375--125
//...