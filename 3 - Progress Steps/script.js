const progress = document.getElementById('progress') /* progress with several states */
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') /* active or inactive */

let currentActive = 1

/*NEXT increment loop stops at the #4 last + mke button active*/

next.addEventListener('click', () => {
    currentActive++ /*from 1 to 4*/
    console.log('current button active is #  ' + currentActive)

    if (currentActive > circles.length) {
        currentActive = circles.length
        /*as long as max is 4, update progress: 1=0%, 2=33%, 3=66%, 4=100%*/
    }

    update()
})

/*Prev increment loop stops at the #1 first + mke button active*/
prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
        /*value: 1 , update progress: 1=0%, 2=33%, 3=66%, 4=100%*/
    }

    update()
})

/*Loop with foreach on circle index to remove + add classname to HTML*/
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            //console.log(("idx is : " + idx))
            console.log(("current active is : " + currentActive))
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active');
    /*
    /*Update the width progress barr 33%, 66 and 100%*/
    console.log(("active lenght is : " + actives.length))
    console.log(("circle lenght is : " + circles.length));
    console.log((actives.length / circles.length) * 100)

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //disable button only if value min 1 or value max =4
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}