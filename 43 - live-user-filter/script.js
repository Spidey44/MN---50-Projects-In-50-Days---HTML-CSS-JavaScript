const result = document.getElementById('result')
const filter = document.getElementById('filter')
// put fetched data
const listItems = []

// API random user.me to generate random user
// browser test 1 user https://randomuser.me/api
// browser test 50 user  https://randomuser.me/api?results=50
getData()

// event listener as type in input create event that call function filer data
// e.target.value gives us what is typed
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    // await to return the promise with data
    const res = await fetch('https://randomuser.me/api?results=50')

    // destructure
    const { results } = await res.json()
    // API data may come in different form  ( 1 array,object..) or path
    console.log('API Result', results)

    // Clear result
    result.innerHTML = ''

    // Loop through the results
    results.forEach(user => {
        console.log('user', user)
        // create a lit item per user
        const li = document.createElement('li')

        // push each li created in the empty listItem array
        listItems.push(li)

        // add the inner htlm to the li initially hard coded
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        // aff li to UI
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    console.log('term searched', searchTerm)
    listItems.forEach(item => {
        // convert to check if matches item and remove add class otherwise add
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}