const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//cursor auto focus whenever open the page
textarea.focus()

//fire off event when press down and let go
textarea.addEventListener('keyup', (e) => {
    console.log(e) //show what we type letter by letter
    createTags(e.target.value) //tag created based on what is typed

    //if key property === 'Enter' => call rando select funciton
    if (e.key === 'Enter') {
        //clear affer 10 milisec
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        //call randm select
        randomSelect()
    }
})

function createTags(input) {
    console.log(input) //typed
    //use coma will split inputs then create an array with all values
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    //filter will trim of if equal to an empty sting
    //space not added
    // map for each tag return an array with the tag trimmed
    console.log(tags)
    tagsEl.innerHTML = ''
    //initial clear avoid pile up
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
        //create a tg for each array value with class tag + set inner text 
        //aappend/add each element (inner text) in the array
    })
}

function randomSelect() {
    console.log(123)
    const times = 30 //highlight each element 30x before stpos

    const interval = setInterval(() => {
        //pick random tag to gighlight
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        //wait 100ms to unhiglight
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    //shift
    setTimeout(() => {
        //clear and pass interval
        clearInterval(interval)
        //select a random tag to stop on
        setTimeout(() => {
            const randomTag = pickRandomTag()
            //highlight and pass chosen tag
            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    //take ALL the tags with same element tag
    const tags = document.querySelectorAll('.tag')
    //Node list with random index based on the array lenghts
    return tags[Math.floor(Math.random() * tags.length)]
}
//add and remove highlight
function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}