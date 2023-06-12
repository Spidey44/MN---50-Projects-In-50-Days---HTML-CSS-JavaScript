const container = document.querySelector('.container')
// URL in variable
const unsplashURL = 'https://source.unsplash.com/random/'
// # of rows
const rows = 5

// as long as we have room for images, less than 3 per row
// -> increment/create image
for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}
// get random size = random image
console.log(getRandomSize())
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}?city`
}

console.log(getRandomNr())
// get random number between 300 and 310
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}