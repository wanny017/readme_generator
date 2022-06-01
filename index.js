// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function userInput(){
    return inquirer.prompt(
        [
    {
        type: 'input',
        message: "What is your GitHub username?(Required)",
        name: 'username',
        default: 'wanny017',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        default: 'wanny017@gmail.com',
        message: "Enter your email address.",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?(Required)",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        default: 'Project Description',
        message: "Enter a brief description of your application."
    },
    {
        type: 'input',
        name: 'installation',
        default: 'step-by-step installation instructions ',
        message: 'Please provide step-by-step installation instructions for your project.',
    },
    {
        type: "input",
        name: "usage",
        default: "instructions and examples of your project in use",
        message: "How will your application be used?"
    },
    {
        type: "input",
        name: "contribute",
        default: 'Nan Wang',
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        default: 'tests and examples',
        message: "What is the process used to test this application?"
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ["MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"],
        name: 'license'
    },
    {
        name: 'fileName',
        message: 'What do you want to call this readme?',
        default: 'README',
        type: 'input'},
])};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();