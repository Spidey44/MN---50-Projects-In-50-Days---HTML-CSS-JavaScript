const fill = document.querySelector('.fill')
// node list
const empties = document.querySelectorAll('.empty')

// event name and function
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// each element of node list
for (const empty of empties) {
    // fireoff everytime over a emptu box
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}
// each functon fire off when certain action
function dragStart() {
    // on the fill class element
    console.log('drag start')
    this.className += ' hold'
    // give time to make original box invisible
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    console.log('drag end')
    this.className = 'fill'
}

function dragOver(e) {
    console.log('drag over')
    // submit the form through js not the page
    e.preventDefault()
}

function dragEnter(e) {
    console.log('drag enter')
    // submit the form through js not the page
    e.preventDefault()
    // effect makes the box hovered darker
    // append class name hovered
    this.className += ' hovered'
}

function dragLeave() {
    console.log('drag leave')
    // reset to empty or clear the dark as i leave
    this.className = 'empty'
}

function dragDrop() {
    console.log('drag drop')
    this.className = 'empty'
    //add class fill with append
    this.append(fill)
}