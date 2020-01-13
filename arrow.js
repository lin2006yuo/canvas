class Arrow {
  constructor() {
    this.x = 100
    this.y = 100
    this.rotate = 0
  }

  draw(ctx) {
    ctx.save()
    ctx.fillStyle = "yellow"
    ctx.lineWidth = "5"
    ctx.lineJoin = "round"
    ctx.beginPath()
    ctx.translate(this.x, this.y)
    ctx.rotate((-90 * Math.PI) / 180 + this.rotate)
    ctx.translate(-this.x / 4, -this.y / 4)
    ctx.moveTo(10, 0)
    ctx.lineTo(30, 0)
    ctx.lineTo(30, 40)
    ctx.lineTo(45, 40)
    ctx.lineTo(20, 70)
    ctx.lineTo(-5, 40)
    ctx.lineTo(10, 40)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
    ctx.restore()
  }
}
