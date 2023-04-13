//
// endpoints https://www.themoviedb.org/documentation/api/discover
//https://www.themoviedb.org/settings/api
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2899a1747cce1d81caa27b9ed1789627&page=1'
//test API url on browser to see all the results
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
//URL before using image as per documentation - https://developers.themoviedb.org/3/getting-started/images
//p/w1280 being the size
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2899a1747cce1d81caa27b9ed1789627&query="'
//concatenate search to query
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    //get the data
    const res = await fetch(url)
    //translate in JSON
    const data = await res.json()
    //array of 20 objcts
    console.log('#1 array with 20 obj ' + data.results)

    showMovies(data.results)
}

//Display movie into the DOM
function showMovies(movies) {
    //clear the mean to avoid add up search
    main.innerHTML = ''
    //loop through data fetched
    movies.forEach((movie) => {
        //destucturing
        const { title, poster_path, vote_average, overview } = movie
        //create  new div
        const movieEl = document.createElement('div')
        //add movie element to it
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}s
        </div>
        `
        //add this into the DOM. append the movie element
        main.appendChild(movieEl)
    })
}
//utility function
//pass the vote rating into the functin to determine colour
//result go to class="${getClassByRate(vote_average)}"
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value
    //if search term exist and not equal to anything
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        //clear the search
        search.value = ''
    } else {
        //reload the page if empty
        window.location.reload()
    }
})