const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/Intern');
const { inherits } = require('util');

// Manager prompt questions
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the manager?',
        name: 'name',
    },
    {
        type: 'input',
        message: "Please type in your id",
        name: 'id',
    },
    {
        type: 'input',
        message: "Please provide your email",
        name: 'email',
    },
    {
        type: 'input',
        message: "Please provide your office number?",
        name: 'officeNumber'
    }
];

// Employee prompt questions
const employeeQuestions = [
    {
        type: 'list',
        message: "What is the employee's role?",
        name: 'role',
        choice: ['Engineer, Intern'],
    },
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the employee's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the employee's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'gitHub',
        when: role === 'engineer',
    },
    {
        type: 'input',
        message: "What is the name of the intern's school?",
        name: 'school',
        when: role === 'intern',
    },
    {
        type: 'confirm',
        message: "Would you like to add another employee to the team?",
        name: 'confirm',
    },
]

// Class to intialize promps
// function init() {
//     inquirer.prompt(managerQuestions)
//             .then((response) => {
            
//             });
    
//     inquirer.prompt(employeeQuestions)
//             .then((response2) => {

//             });

// }