const generateMarkdown = require('./generateMarkdown');
const fs = require('fs')
const path = require('path');
const inquirer = require('inquirer')
const questions = [
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'checklist',
      message: 'What is your Email?',
      name: 'email',
    },
    {
      type: 'checklist',
      message: 'What is your projects name?',
      name: 'title', 
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'installation',
      default: 'npm i',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'tests',
      default: 'npm test'
    }
    
  ]

function writeToFile (fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);  
}

function init() {
  inquirer.prompt(questions).then((inquirerResponse) => {
    console.log("Welcome to my README!!");
    writeToFile('README.md', generateMarkdown({...inquirerResponse}));
  })
}

init()