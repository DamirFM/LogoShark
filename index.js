// Import inquirer and fs librares
const inquirer = require('inquirer');
const fs = require('fs');
// Import Circle, Triangle, Square shape-classes
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');
// Using the inquirer for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Add the text, please',
        },
        {
            type: 'input',
            name: 'text_color',
            message: 'Add the color of the text, please',
        },
        {
            type: 'list',
            message: 'Choose the shape, please',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']

        },
        {
            type: 'input',
            name: 'shape_color',
            message: 'Choose the shapes color, please',
        }
    ])
    // .then promise 
    // callback function waiting for the response from the input and processing it according to our needs
    .then((response) => {
        console.log(response);
        if (response.shape === 'circle') {
            // if (response.shape === 'circle')
            // let's create new object circle, based on a class Circle
            // and take (response.text, response.text_color, response.shape_color) as a parameters
            // we not taking the shape as a parametre, beacause we will create thee different shapes as an objects  
            // when we picking the parameters IT IS IMPORTANT that we are pointing promt.array
            const circle = new Circle (response.text, response.text_color, response.shape_color )
            // using the fs library and writeFileSync method (which takes two parameters PATH and METHOD) we will create the logo.svg in the example folder
            fs.writeFileSync('./examples/logo.svg', circle.render());
        } else if (response.shape === 'square') {
            const square = new Square (response.text, response.text_color, response.shape_color )
            fs.writeFileSync('./examples/logo.svg', square.render());
        } else {
            const triangle = new Triangle (response.text, response.text_color, response.shape_color )
            fs.writeFileSync('./examples/logo.svg', triangle.render());
        }
    })
   