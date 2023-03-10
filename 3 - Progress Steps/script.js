const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

/*EventL to make sure loop stops  at the last*/
next.addEventListener('click', () => {
    currentActive++
    console.log(currentActive)

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

/*EventL to make sure loop stops  at the last*/
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

/*Loop with foreach on circle index to remove + add classname*/
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    /*Update the width progress barr 33%, 66 and 100%*/
    console.log((actives.length / circles.length) * 100)

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}