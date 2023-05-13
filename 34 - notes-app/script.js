const addBtn = document.getElementById('add')

// stringify note to be added to local storage
// convert notes into array
const notes = JSON.parse(localStorage.getItem('notes'))
console.log("test notes after parse", notes)
// Fetch from local storage each note
if (notes) {
    // for each text note add a new note with the note block
    notes.forEach(note => addNewNote(note))
}
// Default addNewNote is empty text
addBtn.addEventListener('click', () => addNewNote())

// function take optional and empty text by default
function addNewNote(text = '') {
    // on click create a note with class note
    const note = document.createElement('div')
    note.classList.add('note')
    // note will have following properties
    // if text then hidden class for display none, no text
    // otherwise opposite display on the text area
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    // add the text typed into NewNote function
    const textArea = note.querySelector('textarea')

    textArea.value = text
    // use marked library
    main.innerHTML = marked(text)
    // remove on click
    deleteBtn.addEventListener('click', () => {
        note.remove()

        // without update, created value never diaper
        updateLS()
    })

    // toggle edit class
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        // destructuring => pull out value from e.target
        const { value } = e.target

        //update innerHTML to the marked value extracted
        // Marked library has heading, numbering, ordered, bold...
        main.innerHTML = marked(value)

        updateLS()
    })
    // add doc to the DOM
    document.body.appendChild(note)
}

// update local storage
function updateLS() {
    // ACaptre all text area of notes list
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    // loop through the list. For each note, add the value to the empty array created
    notesText.forEach(note => notes.push(note.value))
    console.log("test notes before parse", notes)

    // save notes into 
    localStorage.setItem('notes', JSON.stringify(notes))
}

//only string. For Array use JSON.stringify('object')
localStorage.setItem('name', 'Brad')
localStorage.getItem('name')
localStorage.removeItem('name')
//convert objects into string
localStorage.setItem('name', JSON.stringify('lastname'))
//Make string into objects
JSON.parse('object', localStorage.getItem('lastname'))