// Take a look at Circle
const Shape = require("./shapes");

class Square extends Shape {
    constructor(text, text_color, shape_color) {
      super(text, text_color, shape_color);

    }
  
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shape_color}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
    }
  }
  module.exports = Square;