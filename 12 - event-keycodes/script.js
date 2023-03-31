window.addEventListener('keydown', (e) => {
  console.log(e)
  console.log(e.code)
  console.log(e.key)
  console.log(e.KeyCode)
  //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  console.log(e.code)
}
)

const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  //template literal
  // if this... then/? ...else/:...
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})