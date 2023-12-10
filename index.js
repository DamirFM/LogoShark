const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Add the text, please',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Add the color, please',
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
            choices: [' a hexadecimal number']
        }
    ])
    .then( (response) => {
        console.log(response)
    })
   