// Shape - is a parent class-constructor for rest of the shapes that we will use
// it has text, text_color, shape_color properties which we car reuse
// also it has method render, children classes will rewrite it (polymorphism)

class Shape {
    constructor(text, text_color, shape_color) {
      this.text = text;
      this.text_color = text_color;
      this.shape_color = shape_color;
    }
    render() {
        return '';
    }
  }
// export Shape class
module.exports = Shape;