const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

// 3 images per row
for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}
console.log(getRandomSize())
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}?city`
}
console.log(getRandomNr())
// get random number between 300 and 310
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}