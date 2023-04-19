const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    // event listneer on the button
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        //dynamic wiewport position
        console.log('click wiewport position from the left is ' + x)
        console.log('click wiewport position from the top is ' + y)

        //static button position
        const buttonTop = e.target.offsetTop
        console.log('button position from the left is ' + buttonTop)
        const buttonLeft = e.target.offsetLeft
        console.log('button position from the left is ' + buttonLeft)

        //calculate click within the button      
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        //style the animation based on the click locatin within buttion
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        //THIS works with regular funciton only, not arrow funciton     
        //add constante circle into the DOM
        this.appendChild(circle)

        //take out of the dom otherwise keep accumulated in DOM
        setTimeout(() => circle.remove(), 500)
    })
})