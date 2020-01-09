class Ball{
  constructor(radius, color) {
   this.radius = radius
   this.color = color || 'red'
   this.x = 0
   this.y = 0
   this.scaleX = 1
   this.scaleY = 1
  }
  draw(ctx) {
    ctx.save()
    ctx.strokeStyle = this.color
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.translate(this.x * (1 - this.scaleX), this.y * (1 - this.scaleY));
    ctx.scale(this.scaleX, this.scaleY)
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.restore()
  }
}