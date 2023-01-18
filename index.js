const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



// Array for base Employee questions
const employeeQuestions = [
    {
        type: 'input',
        message: 'Name: ',
        name: 'name',
        // Check if valid name
        validate: function(input) {
            const done = this.async();

            if(/[0-9]/.test(input)) {
                done('Please provide a valid name', false);
                return;
            };

            done(null, true);
        }       
    },
    {
        type: 'input',
        message: 'Email: ',
        name: 'email',       
        // Check if valid email
        validate: function(input) {
            const done = this.async();

            if(!input.trim().length || !input.includes('@')) {
                done('Please provide a valid email');
                return;
            };

            done(null, true);
        }
    },
    {
        type:'list',
        message: 'Employee Role: ',
        choices: ['Engineer','Intern','Manager'],
        name: 'employeeRole'
    },  
];

// Additional question list for Engineers
const engineerQuestions = [
    {
        type: 'input',
        message: 'Github username: ',
        name: 'github',       
    },
];

// Additional question list for Interns
const internQuestions = [
    {
        type: 'input',
        message: 'School: ',
        name: 'school',       
    },
];

// Additional question list for Managers
const managerQuestions = [
    {
        type: 'number',
        message: 'Office Number: ',
        name: 'officeNumber',       
    },
];

// Add another employee question
const addAnotherQuestions = [
    {
        type: 'confirm',
        message: 'Add another employee?',
        name: 'addAnother'
    }
];



// let to hold answers
let answers = [];

// Function to ask questions about employee database
const askQuestions = async function() {
    const rawAnswers = await inquirer.prompt(employeeQuestions);    

    let rawRoleAnswers = {};

    // If Engineer, then ask Engineer related questions
    switch(rawAnswers.employeeRole){
        case 'Engineer':
            rawRoleAnswers = await inquirer.prompt(engineerQuestions);

            // Update github to be a link and add to rawAnswers
            rawAnswers.github = `www.github.com/${rawRoleAnswers.github}`

            // Push the object into the bigger answers list
            answers.push(rawAnswers);
            break;

        case 'Intern':
            rawRoleAnswers = await inquirer.prompt(internQuestions);
            rawAnswers.school = rawRoleAnswers.school;
            answers.push(rawAnswers);
            break;

        case 'Manager':
            rawRoleAnswers = await inquirer.prompt(managerQuestions);
            rawAnswers.officeNumber = rawRoleAnswers.officeNumber;
            answers.push(rawAnswers);
            break;
    };

    // Check to see if user wants to add another employee
    const addAnotherEmployee = await inquirer.prompt(addAnotherQuestions);
    
    // If so, then recursively call the function to add another Employee
    if(addAnotherEmployee.addAnother){
        await askQuestions();
    };

    // If there are no more Employeees to be added, go through all the Employees and assign IDs
    let newId = 0;
    answers.forEach((employee) => {
        employee.id = newId;
        newId = newId + 1;
    });
};


// Init to start app
const init = async function() {
    await askQuestions();
    console.log(answers);

};


// Initialization of app
init();


