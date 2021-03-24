// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('generateMarkdown')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: 'what is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'please give a description of your project:'
    },
    {
        type: 'checkbox',
        name: 'tech',
        message: 'what technologies did you use on this project? (Select all that apply)',
        choices: ['HTML', 'CSS', 'JS', 'jQuery', 'node.js', 'npm', ]
    },
    {
        type: 'input',
        name: 'link1',
        message: 'please provide repository link'
    },
    {
        type: 'input',
        name: 'link2',
        message: 'please provide link to deployed app'
    },
    {
        type: 'list',
        name: 'license',
        message: ['']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //function text
}

// TODO: Create a function to initialize app
function init() {
    //function text
}

// Function call to initialize app
init();
