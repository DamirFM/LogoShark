// Import parent Shape class 
const Shape = require("./shapes");

class Ellipse extends Shape {
    constructor(text, text_color, shape_color) {
        super (text, text_color, shape_color)
    }
    render () {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><ellipse cx="145" cy="105" rx="100" ry="25" fill="${this.shape_color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
    }
};

 // Export Circle class
 module.exports = Ellipse;