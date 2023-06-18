// node list -> 3 screens in 3 index from 0 to 2
const screens = document.querySelectorAll('.screen');
// all insect buttons
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
// location where all screen + insect visible
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
// GlobalVariables
let seconds = 0
let score = 0
// object with img source, img source + alt
let selected_insect = {}

// switch to first screen from node list is 0 index
// set margin top to -100 with class up
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

// event listner on each button
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // get image inside button + src + alt
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        // obj when add selected insect src and alt
        selected_insect = { src, alt }
        // select second screen
        screens[1].classList.add('up')
        // generate insect fct and add in random spot every sec
        setTimeout(createInsect, 1000)
        // start timer of game
        startGame()
    })
})

// keep calling increase Time fct every sec
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
    // increment sec by 1 every sec
    seconds++
}

// insert insect into the DOM
function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    // random top and left x, y from getRandomLocation()
    const { x, y } = getRandomLocation()
    // set insect style with y and x value in px
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    // image to be inserted into the DOM with random rotation
    // useing the insect img source and alt
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
    // add a event listener on each insect created
    insect.addEventListener('click', catchInsect)

    // add to the DOM
    game_container.appendChild(insect)
}

function getRandomLocation() {
    // make sure it's withing the window
    // 1- figure out the actual size width and height
    const width = window.innerWidth
    const height = window.innerHeight
    // x value random # * not too close to edge
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    // return obj with X and Y
    return { x, y }
}

// when click insect, 
//increase score + disappear + add 2 insects
function catchInsect() {
    increaseScore()
    // add class to insect
    // this from insect clicked on
    this.classList.add('caught')
    // remove 2 secs later
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

// Every time you click one, 2 more show up
function addInsects() {
    // insect #1 created
    setTimeout(createInsect, 1000)
    // insect #2 created
    setTimeout(createInsect, 1500)
}

// message after reach 20
function increaseScore() {
    score++
    if (score > 10) {
        // make the final message come down
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}