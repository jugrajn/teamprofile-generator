const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/Intern');

const teamData = [];

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
        choices: ['Engineer', 'Intern'],
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
        when: (input) => input.role === 'Engineer',
    },
    {
        type: 'input',
        message: "What is the name of the intern's school?",
        name: 'school',
        when: (input) => input.role === 'Intern',
    },
    {
        type: 'confirm',
        message: "Would you like to add another employee to the team?",
        name: 'confirm',
    },
]

// Retrieve Input values for Manager Questions into empty array
function init() {
  return  inquirer.prompt(managerQuestions)

            .then((managerData) => {
            const {name, id, email, officeNumber } = managerData;
            const manager = new Manager (name, id, email, officeNumber);

            teamData.push(manager);
            console.log(manager);
            });
}   

     // Retrive Input values for Employee questions into empty array
function addEmployee() {      
  return  inquirer.prompt(employeeQuestions)
  
            .then((employeeData) => {
            const {role, name, id, email, gitHub, school} = employeeData;
            let theEmployee;
            
            // SET A CONDITION ON WHICH INPUT DATA SHOULD BE RETRIEVED ON BASED ON EMPLOYEE ROLE
            if (role === "Engineer") {
                theEmployee = new Engineer (name, id, email, gitHub);

            } else if (role === "Intern")
                theEmployee = new Intern (name, id, email, school);
                // ADD TO EMPTY TEAM ARRAY TO JOIN ALL INPUT DATA
                teamData.push(theEmployee);
                console.log(theEmployee);
            });
};

init()
    .then(addEmployee);
