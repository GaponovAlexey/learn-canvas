const WIDTH = 600
const HEIGHT = 200
const DPI_WIDTH = WIDTH * 2
const DPI_HEIGHT = HEIGHT * 2

function chart(example, data) {
  ctx = example.getContext('2d')
  example.style.width = WIDTH + 'px'
  example.style.height = HEIGHT + 'px'
  example.width = DPI_WIDTH
  example.height = DPI_HEIGHT
  ctx.beginPath()
  ctx.arc(80, 100, 56, (3 / 4) * Math.PI, (1 / 4) * Math.PI, true)
  ctx.fill() // *14
  ctx.moveTo(40, 140)
  ctx.lineTo(20, 40)
  ctx.lineTo(60, 100)
  ctx.lineTo(80, 20)
  ctx.lineTo(100, 100)
  ctx.lineTo(140, 40)
  ctx.lineTo(120, 140)
  ctx.stroke() // *22
}

chart(document.getElementById('example'), [])
