// update inner text of counter
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    //SET to string of 0 by default
    counter.innerText = '0'

    const updateCounter = () => {
        //take the data from the counter data attribute
        //string to number: #1 wrap in number, #2 parseint #3 +sign
        const target = +counter.getAttribute('data-target')
        console.log(typeof target, target)
        //GET what's in the innertext
        const c = +counter.innerText
        //increment by, bigger, faster.
        const increment = target / 200
        console.log(increment)
        //increment as long as under the target. ass finish same
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            //run updateCounter every mil sec to increment each time
            //speed based on increment as well. smaller the fatser
            setTimeout(updateCounter, 1000)
        } else {
            //stop before pass the target
            counter.innerText = target
        }
    }

    updateCounter()
})