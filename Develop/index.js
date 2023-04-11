// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description for your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter usage information:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter contribution guidelines:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter test instructions:',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Choose a license for your application:',
      name: 'license',
      choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((response) => {
    const badge = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      'None': '',
    };
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
