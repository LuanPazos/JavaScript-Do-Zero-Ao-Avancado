const button = document.querySelector('button')

function toggle() {
  button.classList.toggle('altColor')
}

// toggle()
// button.addEventListener('click', toggle)


button.addEventListener('click', () => {
  button.classList.toggle('altColor')
})