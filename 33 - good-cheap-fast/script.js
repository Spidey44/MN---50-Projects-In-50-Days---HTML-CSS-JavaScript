// Grab all toggles + the ones by ID
const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// event listener on each toggle -> on change call function do the trick passing element clicked
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))
function doTheTrick(theClickedOne) {
    // if all checked clicked uncheck one
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            // uncheck fast for good clicked
            fast.checked = false
            console.log("test", e.target)
        }

        if (cheap === theClickedOne) {
            // uncheck good for cheap clicked
            good.checked = false
            console.log("test", e.target)
        }

        if (fast === theClickedOne) {
            // uncheck cheap for fast clicked
            cheap.checked = false
            console.log("test", e)
        }
    }
}