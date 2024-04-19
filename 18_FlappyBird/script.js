const hole = document.getElementById('hole')
const game = document.getElementById('game')
const result = document.getElementById('result')
const text = document.getElementById('text')
let score = 0
let jumping = 0

hole.addEventListener('animationiteration', () => {
    let rand = Math.floor(((Math.random()*350)+150))
    hole.style.bottom = `${rand}px`
    console.log(rand)
})

document.getElementById('btn').addEventListener('click', () => {
    location.reload();
})