
// gather all variable in a array. if not, not be visible
const sounds = ['rocket', 'cricket', 'barking', 'transition', 'emergency', 'applause', 'boo', 'gasp', 'tada', 'victory', 'wrong', 'test']

// Loop through each and create a button element
//add a class btn to the boutton for styling
// set innerText to sound
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    console.log(btn)
    console.log(btn.innerText)
    btn.innerText = sound

    btn.addEventListener('click', () => {
        //js API  are function /method for audio element to stopSongs() or play()
        //avoid playing together
        stopSongs()

        //select audiotag to play baased on id
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        //select the previous song nd stop with pause() and reset to 0
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}