// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT implicit wait is asunc function then await fetch
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()
  console.log('test : ' + data.id)
  console.log('test 1: ' + data.status)
  console.log('test 2: ' + data.joke)
  console.log('test : ' + data)
  //NEtworktab to see the request in detail. Type Ftech URL from icanhazdad
  //-> response and header, request header with  Accept: 'application/json'
  jokeEl.innerHTML = data.joke
  //The innerHTML property sets or returns the HTML content (inner HTML) of an element.
}

// USING .then() then is explicit wait till finish
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//      console.log('object receve' + data)
//       jokeEl.innerHTML = data.joke
//     })
// }
