const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

//loop all through small cups
smallCups.forEach((cup, idx) => {
    console.log('8 cups from 0 to 7' + idx)
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    //if clicked contais full + next does not contain full decrement current index clicked
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        //index in the loop to fill all the cup in order
        console.log('index clocked on' + idx)
        if (idx2 <= idx) {
            //if cup before the one clicked empty, make it + all previous full
            //if i click on #4 and #3 empty make all 1 to 4 full
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    //select all full cups 
    const fullCups = document.querySelectorAll('.cup-small.full').length
    console.log(fullCups)
    //8 cups
    const totalCups = smallCups.length
    console.log(fullCups)

    //Hide hidden if empty or 0%
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
        //filling cup Show the %based on the 330 height of large cup 
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        //display the text 
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
    //remove the remainded at the top ONLY if cup 100% full
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        //show the number of cup remained from 2 liters
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}