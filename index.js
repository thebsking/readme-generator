// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'what is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project:'
    },
    {
        name: 'instuctions',
        message: 'Please provide installation instructions:',
        type: 'input'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please provide usage instructions:'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please provide contribution guidelines:'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please provide any test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will your project use?',
        choices: ['MIT', 'GNU GPLv3', 'Apache2.0', 'the Unlicense', 'none' ]
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your github user name?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => fs.writeFile('README.md', generateMarkdown(answers)))
        .catch((error) => console.log(error))
}

// Function call to initialize app
init();
