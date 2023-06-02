const range = document.getElementById('range')

// As move slider
range.addEventListener('input', (e) => {
    // Target = represent element range, 
    // convert in number with +
    const value = +e.target.value
    // Label is next sibling f target
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    console.log("static range_width from CSS", range_width)
    const label_width = getComputedStyle(label).getPropertyValue('width')
    console.log("static label_width from CSS", label_width)
    // remove px to keep only the number
    const num_width = +range_width.substring(0, range_width.length - 2)
    // remove px to keep only the number
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    console.log("converted px to numbers", num_width, num_label_width)

    // get the min and max values converted in number
    const max = +e.target.max
    const min = +e.target.min
    console.log("min and max numbers", min, max)

    // calculate the thumb color based on where cursor is
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
    console.log("cursor location", left)

    // apply the left value to CSS label
    label.style.left = `${left}px`

    // updated label as i move
    label.innerHTML = value
})

// makes it always stay in the middle
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}