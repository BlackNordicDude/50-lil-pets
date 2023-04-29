const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const sizeEl = document.getElementById('size')
const increment = document.getElementById('increase')
const decrement = document.getElementById('decrease')
const colorInput = document.getElementById('color')
const clearEl = document.getElementById('clear')

let size = 5
let isPressed = false
let color 
let x
let y

(function setStartColor() {
    color = colorInput.value
})()

colorInput.addEventListener('change', () => {
    color = colorInput.value
})

decrement.addEventListener('click', () => { 
    size = size > 1 ? --size : 1
    sizeEl.innerText = `${size}`
    if (size === 1) {
        decrement.setAttribute('disabled', '')
    }
    if (size < 20) {
        increment.removeAttribute('disabled')
    }
})
increment.addEventListener('click', () => {
    size = size < 21 ? ++size : 20
    sizeEl.innerText = `${size}`
    if (size > 1) {
        decrement.removeAttribute('disabled')
    }
    if (size === 20) {
        increment.setAttribute('disabled', '')
    }
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})
canvas.addEventListener('mouseleave', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x = x2
        y = y2
    }
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0,800,800)
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


