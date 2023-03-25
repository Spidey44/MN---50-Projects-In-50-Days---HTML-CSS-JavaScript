const labels = document.querySelectorAll('.form-control label')
// each letter in an arra -> split, fct to wrp in span -> join
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})