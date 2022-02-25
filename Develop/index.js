// packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    "What is the project name? (Required)",
    "A description of the project (Required)",
    "The instructions for installation (Required):",
    "What are the usage information for the project? (Required)",
    "What are the contribution guidelines? (Required)",
    "Write instructions on how to do a test (Required)"
];


// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
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
            name: 'proDes',
            message: questions[1],
            validate: proDes => {
                if(proDes){
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
            message: questions[2],
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
            message: questions[3],
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
            message: questions[4],
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
            type: 'input',
            name: 'proTests',
            message: questions[5],
            validate: proTests => {
                if(proTests){
                    return true;
                }
                else{
                    console.log("Please enter testing instructions!");
                    return false;
                }
            }
        }
    ])
};


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, (err) => {
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
        const pageREADME = generatePage(templateData);
        fs.writeFile("./README.md", pageREADME, err => {
            if(err){
                console.error(err);
                return;
            }
            console.log("File created");
        })
    })
    //.then(pageREADME => {
      //  return writeFile(pageREADME);
    //})
    .catch(err => {
        console.log(err);
    });