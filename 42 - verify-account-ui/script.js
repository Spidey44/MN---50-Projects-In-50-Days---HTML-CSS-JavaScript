// makes 1 digit per box instead of several
// grab all 6 digits containers + into node list
const codes = document.querySelectorAll('.code')

// first element in the node list auto on load page
codes[0].focus()

// grab input and index for each code
codes.forEach((code, idx) => {
    // run a function with event object check if valid number

    code.addEventListener('keydown', (e) => {
        // if valid snumber move focus to the next slot at index+1
        if (e.key >= 0 && e.key <= 9) {
            // bug fix clear the index on click
            codes[idx].value = ''
            // set the node list to index to move forward
            // start with ind0 then wait 10ms before move to next one
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})