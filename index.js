const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/Intern');

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
        
    }
]