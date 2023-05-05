const inquirer = require('inquirer');
const fs = require('fs');

//importing the route to the shapes.js
const { Square, Triangle, Circle } = require('./lib/shapes');

function writeFile(fileName, answers) {
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





}





