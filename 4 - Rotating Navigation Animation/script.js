const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
//either for class (query  selector) or can be selected by id getelementbyid

open.addEventListener('click', () => container.classList.add('show-nav'))
//when click happends, we'll add or remove class to the container

close.addEventListener('click', () => container.classList.remove('show-nav'))