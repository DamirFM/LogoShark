// Import parent Shape class 
const Shape = require("./shapes");
// Let's create new class Circle
// Circle will inherit all properties of parent Shape class 
class Circle extends Shape {
    constructor(text, text_color, shape_color) {
      // inheritance of properties 
      super(text, text_color, shape_color);
    }
  // inheritance of method
  // rewrite the render method
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shape_color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
    }
  }
  // Export Circle class
  module.exports = Circle;