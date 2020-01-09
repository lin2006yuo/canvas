// const canvas = document.querySelector('canvas')
// const ctx = canvas.getContext('2d')
class Spaceship{
  constructor() {
    this.x = 100
    this.y = 100
    this.rotation = 0
  }
  draw(ctx) {
    ctx.save();
    ctx.beginPath()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.strokeStyle = "red";
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, 10);
    ctx.lineTo(-5, 0);
    ctx.lineTo(-10, -10);
    ctx.lineTo(10, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.restore()
  }
}