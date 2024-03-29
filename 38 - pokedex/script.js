// container to be filled with all the cards
const poke_container = document.getElementById('poke-container')
const pokemon_count = 155
// key value pair - type: color 
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

// Use object keys as value
const main_types = Object.keys(colors)
console.log('array with different types ', main_types)
// fetch the API data
const fetchPokemons = async () => {
    // loop through API 150 time to generate cars with id
    for (let i = 1; i <= pokemon_count; i++) {
        // pass 1  as ID
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    // Fetch card with API URL
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    // convert data in JSON
    const data = await res.json()
    console.log("data fetched to be inserted into the DOM", data)
    createPokemonCard(data)
}

// create a card for each fetch - poor performance in practice
const createPokemonCard = (pokemon) => {
    // construct div with pokemon class
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    // make Pokemon name first letter uppercase + rest of the word from slice 1
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    // make id 3 digit with number or leading 0
    const id = pokemon.id.toString().padStart(3, '0')
    console.log('array of type pokemon', pokemon.types)
    // create a new array -> for each time get type.name
    const poke_types = pokemon.types.map(type => type.type.name)
    console.log('array object with types', pokemon.types)
    // loop through index type 0 for fire, 1 for grass... -> no match return -1
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    //color change based on the type as index for color
    const color = colors[type]
    //update css based on the type
    pokemonEl.style.backgroundColor = color

    // create template for HTML
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `
    // insert into the html
    pokemonEl.innerHTML = pokemonInnerHTML

    // insert container into the DOM
    poke_container.appendChild(pokemonEl)
}

fetchPokemons()