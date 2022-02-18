// packages needed
const inquirer = require("inquirer");
const writeFile = require("fs");
//const generatePage = require("./src/page-template.js");

// TODO: Create an array of questions for user input
const questions = [
    "What is the project name? (Required)",
    "A description of the project (Required)",
    "The instructions for installation (Required):",
    "What are the usage information for the project? (Required)",
    "What are the contribution guidelines? (Required)",
    "Write instructions on how to do a test (Required)"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
