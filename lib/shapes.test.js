// Import Circle, Triangle, Square shape-classes
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');
const Ellipse = require('./ellipse');
// By calling our test file as shapes.test.js we already pick the shape.js as default
// let's describe Shape
// and inside Shape we will test Circle, Triangle, Square
describe('Shape', () => {
// test for Circle
describe('Circle', () => {
    // let's creat new circle (it is not the same circle as we created in index.js)

    // is is just brand new object for testing
    // it also using Circle class
    // and takes 'Damir', 'white', 'blue' as testing parameters
    // Beacause our circle in indes.js using thise tameplate new Circle (response.text, response.text_color, response.shape_color )
    // we are passing this parameters here
    const circle = new Circle('Damir', 'white', 'blue' );
    // describe the test
    it('Testing text, text_color, shape_color properties of Circle', () => {
    // check the actual input values and expected output values
    // if it is equal TEST is PASSED
    // input                output
      expect(circle.text).toEqual('Damir');
      expect(circle.text_color).toEqual('white');
      expect(circle.shape_color).toEqual('blue');
    });
    it('Testing render of Circle', () => {
    expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${circle.shape_color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.text_color}">${circle.text}</text></svg>`)
      });
  });
// test for Square
  describe('Square', () => {
    const square = new Square('Damir', 'white', 'blue' );
    it('Testing text, text_color, shape_color properties of Square', () => {
    // input                output
      expect(square.text).toEqual('Damir');
      expect(square.text_color).toEqual('white');
      expect(square.shape_color).toEqual('blue');
    });
    it('Testing render of Square', () => {
    expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <rect x="10" y="10" width="300" height="200" stroke="black" fill="${square.shape_color}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.text_color}">${square.text}</text></svg>`)
      });
  });
// test for Triangle
  describe('Triangle', () => {
    const triangle = new Triangle('Damir', 'white', 'blue' );
    it('Testing text, text_color, shape_color properties of Triangle', () => {
    // input                output
      expect(triangle.text).toEqual('Damir');
      expect(triangle.text_color).toEqual('white');
      expect(triangle.shape_color).toEqual('blue');
    });
    it('Testing render of Triangle', () => {
    expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${triangle.shape_color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.text_color}">${triangle.text}</text></svg>`)
      });
  });
  // test for Ellipse
  describe('Ellipse', () => {
    const ellipse = new Ellipse('Damir', 'white', 'blue' );
    it('Testing text, text_color, shape_color properties of Ellipse', () => {
    // input                output
      expect(ellipse.text).toEqual('Damir');
      expect(ellipse.text_color).toEqual('white');
      expect(ellipse.shape_color).toEqual('blue');
    });
    it('Testing render of Ellipse', () => {
    expect(ellipse.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><ellipse cx="145" cy="105" rx="100" ry="25" fill="${ellipse.shape_color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${ellipse.text_color}">${ellipse.text}</text></svg>`)
      });
  });
});