const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

// EL toggle class big on click button
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  // create 4 boxes for each 4 rows = loop total 16x
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      console.log("16 boxes", box)
      box.classList.add('box')
      console.log("16 boxes with class", box)
      // add positioning to each box. All negative values. Onx and Y
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()


// values bgd position 00-0, -125-0, -250-0, -375-0
// values bgd position 0--125, -125--125, -250--125, -375--125
//...