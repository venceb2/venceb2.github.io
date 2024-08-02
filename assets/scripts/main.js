const body = document.body

const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

console.log(spanHi.dataset)
spanHi.dataset.newName = "New name"

spanBye.style.color = "red" 