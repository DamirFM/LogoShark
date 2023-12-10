// Take a look at Circle
const Shape = require("./shapes");

class Triangle extends Shape {
    constructor(text, text_color, shape_color) {
      super(text, text_color, shape_color);

    }
  
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.shape_color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
    }
  }
  module.exports = Triangle;