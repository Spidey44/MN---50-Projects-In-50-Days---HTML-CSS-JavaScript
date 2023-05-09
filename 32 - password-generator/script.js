const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// store each function generated in object with a 
//key name-pair random value
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    // 1- create text area element
    const textarea = document.createElement('textarea')
    // 2- Grab result and add it as a text
    const password = resultEl.innerText

    // if no password return nothing
    if (!password) { return }

    //add the value to text area created
    textarea.value = password
    //append text into the body
    document.body.appendChild(textarea)
    // select everything in text area
    textarea.select()
    // copy
    document.execCommand('copy')

    // Clipboard API
    // async function copyToClipboard(text) {
    //     try {
    //       await navigator.clipboard.writeText(text);
    //       console.log('Text copied to clipboard');
    //     } catch (err) {
    //       console.error('Error in copying text: ', err);
    //     }
    //   }

    // copyToClipboard('Some text to copy');

    // copyToClipboard('Some text to copy');
    // Once copied remove from DOM
    textarea.remove()
    // Alert
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    // get the input. + sign convert string to number
    const length = +lengthEl.value
    //  checked true or false
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
    console.log('all input values', length, hasLower, hasUpper, hasNumber, hasSymbol)

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

// function to generate pws with all 5 input -> 
function generatePassword(lower, upper, number, symbol, length) {
    // default empty
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    console.log("typesCount how many are selected", typesCount)
    // filter get the first value of the array to filter out false
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])
    console.log("typesArr with all true input type selected", typesArr)
    if (typesCount === 0) {
        // REmove undefined -> If nothing return empty string
        return ''
    }

    // Create the password on demand in same order type
    // as long as no # > length 
    // go through 'randomFunc' each type ( key pair type/ value)
    // increment type  by one
    // append to generatedPassword
    // example lower[0], upper[0], number[0], symbol[0], lower[1], upper[1], number[1], symbol[1]
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            console.log("type ", type)
            // filter out the false to keep the true checked values
            const funcName = Object.keys(type)[0]
            console.log("funcName ", funcName)
            // add to empty list the first value of each type
            generatedPassword += randomFunc[funcName]()
        })
    }

    // from array to list
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    // https://www.w3schools.com/charsets/ref_html_ascii.asp
    // alphabet from A char 65 to Z char 90
    // alphabet from a char 97 to z char 122
    // numbers from 0, char 48 char to 9 char 57...
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// return a random lower case number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    console.log('example char z', string.fromCharCode(122))

}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    // max based on the entire string
    return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log("random symbol", getRandomSymbol());
console.log("random number", getRandomNumber())
console.log("random lowercase letter", getRandomLower())
console.log("random uppercase letter", getRandomUpper())