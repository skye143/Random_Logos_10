const inquirer = require('inquirer');
const fs = require('fs');

//importing the route to the shapes.js
const { Square, Triangle, Circle } = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'


    svgString += '<g>';


    svgString += `${answers.shape}`;


    let logoShapeChoice;
    if (answers.shape === 'Triangle') {
        logoShapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === 'Square') {
        logoShapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        logoShapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

    svgString += '<g>';

    svgString += '</svg>';

    fs.writeFile(fileName, svgString, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: ' What text would you like on your logo? (Select 3 characters)',
                name: 'text',
                validate: function (input) {
                    if (input.length <= 3) {
                        return true;
                    } else {
                        return 'Do not more then 3 characters';
                    }
                },
            },
            // Prompt for text color
            {
                type: 'input',
                message: ' Pick a color. (Enter a simple color)',
                name: 'textColor',
            },
            // Prompt for shape choice
            {
                type: 'list',
                message: ' What shape do you want to use?',
                choices: ['Square', 'Triangle', 'Circle'],
                name: 'shape',
            },
            // Prompt for shape color
            {
                type: 'input',
                message: ' Choose color for the shape background (Enter a simple color)',
                name: 'shapeBackgroundColor',
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log('Must enter no more then 3 characters');
                promptUser();
            } else {
                writeToFile('logo.svg', answers);
            }
        })
}

promptUser();









