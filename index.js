// packages for app
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// questions for user
const questions = [
    {
        type: 'input',
        name: 'appTitle',
        message: 'What is the title of the app?'
    },    
    {
        type: 'input',
        name: 'description',
        message: 'What is this project? (Brief overview)'
    },
    {
        type: 'input',
        name: 'gitRepo',
        message: 'Where to find your github repo?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'gitUser',
        message: 'What is your username on github?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is this app installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this app to be used?'
    },
    {
        type: 'input',
        name: 'screencap',
        message: 'Provide a capture of the live app?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
        choices: ['MIT', 'AGPL', 'LGPL', 'GPL', 'MPL', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Can further contributions be made?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can the app be tested?'
    },
    {
        type: 'input',
        name: 'liveApp',
        message: 'Link to the live site?'
    }
];

//has writeToFile create readme
function writeToFile(data) {
    fs.writeFile('./assets/README.md', data, (err) =>
    err ? console.error(err) : console.log('README launched successfully!')
    );
};

//init initializes questions
function init() {
    return inquirer.prompt(questions);
}

//initialize
init()
//user input accepted
.then(userInput => {
    return writeToFile(generateMarkdown(userInput));
})
.catch(err => {
    console.log(err)
});