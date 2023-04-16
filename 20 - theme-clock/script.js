const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// dark mode or light mode
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    console.log(time)
    const month = time.getMonth()
    console.log(month)
    const day = time.getDay()
    console.log(day)
    const date = time.getDate()
    console.log(date)
    const hours = time.getHours()
    console.log(hours)
    // 12 hours clock
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    console.log(minutes)
    const seconds = time.getSeconds()
    console.log(seconds)
    // set PM or AM based on hour
    const ampm = hours >= 12 ? 'PM' : 'AM'

    // map hour, min or sec to 360 degree
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    // add 0 to number is less than 10
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    //dat and mont from index of array
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
// map hour, min or sec t0 360
//utility function
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

// function called every sec or 1k mil sec
setInterval(setTime, 1000)