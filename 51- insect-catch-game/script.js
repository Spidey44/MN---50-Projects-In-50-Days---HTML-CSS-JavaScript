// node list
const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
// GlobalVariables
let seconds = 0
let score = 0
// object with img source, img alt
let selected_insect = {}

// switch to first screen from node list is 0 index
// set margin top to -100 with class up
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

// event listner on each button
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        // select second screen
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

// timer
function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    // display 09 instead of 9 if less than 10 sec left
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    // random top and left x, y from getRandomLocation()
    const { x, y } = getRandomLocation()
    // set y and x value in px
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    // image to be inserted into the DOM with random rotation
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
    // add a event listener on each insect created
    insect.addEventListener('click', catchInsect)

    // add to the DOM
    game_container.appendChild(insect)
}

function getRandomLocation() {
    // make sure it's withing the window
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    // return obj with X and Y
    return { x, y }
}

// when click insect, increase score + disappear + add 2
function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

// Every time you click one, 2 more show up
function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

// message after reach 20
function increaseScore() {
    score++
    if (score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}