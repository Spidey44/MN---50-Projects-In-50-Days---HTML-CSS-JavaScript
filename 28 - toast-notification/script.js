const button = document.getElementById('button')
// toasts container
const toasts = document.getElementById('toasts')

// option 1 below: array of random message
// option 2: messages passed as argument
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

// create notification based on click
// Option 2 pass a message to createNotification("error message")
button.addEventListener('click', () => createNotification())

// create notification
function createNotification(message = null, type = null) {
    console.log("test create notification")
    //    create div element with class of toast
    const notif = document.createElement('div')
    notif.classList.add('toast')
    // add inside text. String or comment as argument

    notif.classList.add(type ? type : getRandomType())

    // select random index from the array "messages"
    notif.innerText = message ? message : getRandomMessage()

    // add the created "notif" element into the "toasts" container
    toasts.appendChild(notif)

    // remove each notif element added to DOM after 3 sec
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    // select random index from the array "messages"
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
// can pass a message into create notification otherwise everithing is random