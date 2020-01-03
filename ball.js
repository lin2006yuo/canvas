class Ball{
  constructor(radius, color) {
   this.radius = radius
   this.color = color || 'red'
   this.x = 0
   this.y = 0
  }
  draw(ctx) {
    ctx.strokeStyle = this.color
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
}