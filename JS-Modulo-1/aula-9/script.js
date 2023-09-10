window.alert = 'ola mundo'

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    window.alert('ola mundo')
})