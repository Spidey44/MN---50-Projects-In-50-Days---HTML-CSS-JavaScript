const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// item load on if todo in  local storarage
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}
// add todo function on click submit
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

// take in todo from input
function addTodo(todo) {
    let todoText = input.value

    // capture todo is passed in
    if (todo) {
        todoText = todo.text
    }
    console.log("text", todo.text)

    // construct a list item if todo exist
    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        // completed class added and removed on click (toggle)
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        // remove todo element on click with contextmenu (right click)
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })
        // add to the dom
        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

// take all todo list item and put in local storage
function updateLS() {
    // node list
    todosEl = document.querySelectorAll('li')

    // default empty. loop throuth and push
    const todos = []

    todosEl.forEach(todoEl => {
        //  capture 2 properties: text and completed status
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })


    // browser API. convert JASOn with stringify and parse
    // update local storage with list of items
    localStorage.setItem('todos', JSON.stringify(todos))
}