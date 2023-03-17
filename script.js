const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 //will go from 0 to 100

let int = setInterval(blurring, 30) //increment every 30ms

function blurring() {
    load++ //increment load
    console.log(load)
    if (load > 99) { //will stop till reach 99
        clearInterval(int) //will stop increment at 100

    }

    loadText.innerText = `${load}%`//text display load value
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //map value scale load time (0,100) to opacity(1 invisible ,0 visible)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    //map value scale load time (0,100)to blurr (30 to 0)
    //both in //
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}