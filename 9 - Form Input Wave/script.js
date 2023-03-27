const labels = document.querySelectorAll('.form-control label')
// get node list of all label (2 labels)
console.log(labels)
console.log(labels[0].innerHTML) //email label to move
console.log(labels[1].innerHTML) //pwd labelto move


// each letter in an arra -> split, fct to wrp in span -> join
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') //[e,m,a,i,l] or [p,a,s,s,w,or,d]
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        //letter 1 => inx 1 x50, letter2 => index 2x50...
        .join('')
})