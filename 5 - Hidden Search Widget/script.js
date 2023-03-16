//target
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//event listener on button ( click 
//+ action toggle class "active" ( add/ remove))
//+ action force focus on search input
//$(selector).on('eventName', function() => run this code when the event happens
btn.addEventListener('click', () => {
    //Mouse Events, Touch Events,Keyboard Events...
    search.classList.toggle('active')
    //The classList property is read-only
    //Toggle "active" on and off:
    input.focus()
})