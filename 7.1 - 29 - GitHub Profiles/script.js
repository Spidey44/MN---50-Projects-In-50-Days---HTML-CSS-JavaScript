const APIURL = 'https://api.github.com/users/' //root URL

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//request #1 to get the username
async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        console.log(data)
        createUserCard(data)
        getRepos(username)
    } catch (err) {
        console.log(err)
        if (err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

//request #2 to get the repo after createusercard() with username coming from #1
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch (err) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
        <li>${user.public_gists} <strong>Gists</strong></li>
        <li>${user.company} <p>Company</p></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML

}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    //repos from the cards created
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 10) //display first 10 repos
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url //from url in response
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl) //Append repoEl item to a list
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)

        search.value = ''
    }
})

/*
LEARNINGS
REST API with Axios object: CDN link to use library in Scrip tag
https://cdnjs.com/libraries/axios
- axios.put(),axios.post(), axios.delete
- axios.(URL) to get request 

Endpoint Users https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
Endpoint Repos https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
*/