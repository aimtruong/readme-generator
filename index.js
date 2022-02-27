// packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    "What is the project name? (Required)",
    "What was your motivation for the project? (Required)",
    "Why did you build this project? (Required)",
    "What are the steps required to install your project? (Required):",
    "How do you use your project (include examples)? (Required)",
    "List any collaborators, third-party assets, or tutorials that should be mentioned (Required)",
    "Explain how to run your tests (Required)"
];


// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'fullName',
            message: "What is your full name (Required): ",
            validate: fullName => {
                if(fullName){
                    return true;
                }
                else{
                    console.log("Please enter your full name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubName',
            message: "What is your GitHub username (Required): ",
            validate: githubName => {
                if(githubName){
                    return true;
                }
                else{
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email to contact you? (Required)",
            validate: email => {
                if(email){
                    return true;
                }
                else{
                    console.log("Please enter your email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'proTitle',
            message: questions[0],
            validate: proTitle => {
                if(proTitle){
                    return true;
                }
                else{
                    console.log("Please enter the project name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desWhat',
            message: questions[1],
            validate: desWhat => {
                if(desWhat){
                    return true;
                }
                else{
                    console.log("Please enter a description for your project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desWhy',
            message: questions[2],
            validate: desWhy => {
                if(desWhy){
                    return true;
                }
                else{
                    console.log("Please enter a description for your project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'proIns',
            message: questions[3],
            validate: proIns => {
                if(proIns){
                    return true;
                }
                else{
                    console.log("Please enter the installation instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'proUs',
            message: questions[4],
            validate: proUs => {
                if(proUs){
                    return true;
                }
                else{
                    console.log("Please enter the usage information for your project!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLic',
            message: "Does the project have a license? (Required)",
            default: false
        },
        {
            type: 'list',
            name: 'proLic',
            message: "What license does the project have? (Required)",
            choices: ["Apache License 2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD 2-Clause 'Simplified' License",
                    "BSD 3-Clause 'New' or 'Revised' License",
                    "Boost Software License 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "GNU Affero General Public License v3.0",
                    "GNU General Public License v2.0",
                    "GNU Lesser General Public License v2.1",
                    "Mozilla Public License 2.0",
                    "The Unlicense"
                ],
            when: ({ confirmLic }) => {
                if(confirmLic){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'proCon',
            message: questions[5],
            validate: proCon => {
                if(proCon){
                    return true;
                }
                else{
                    console.log("Please enter the contribution guidelines!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: "Does the project have tests? (Required)",
            default: true
        },
        {
            type: 'input',
            name: 'proTests',
            message: questions[6],
            when: ({ confirmTest }) => {
                if(confirmTest){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    ])
};


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dist/README.md', fileContent, (err) => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "file written successfully"
            });
          });
    });
};


// Function call to initialize app
init()
    //.then(license => {
    //    return generateMarkdown(license);
    //})
    .then(templateData => {
        return generatePage(templateData);
    })
    .then(pageREADME => {
        console.log("README.md created successfully, find it in the dist folder and edit to your standards.");
        return writeFile(pageREADME);
        
    })
    .catch(err => {
        console.log(err);
    });