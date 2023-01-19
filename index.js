const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


let answers = []; // let to hold answers
let employees = []; // let to hold Employee objects

const htmlInit = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <section class="hero is-dark">
        <div class="hero-body">
          <p class="title">
            My Team
          </p>
        </div>
    </section>
    <br>

    <div class="container box is-align-content-flex-start">
`

const htmlEnding = `</div>
    
    

</body>
</html>`

// Question Arrays ----------------------------------------------------------------------------

// Array for base Employee questions
const employeeQuestions = [
    {
        type: 'input',
        message: 'Name: ',
        name: 'name',
        // Check if valid name
        validate: function(input) {
            const done = this.async();

            if(/^[0-9]+$/.test(input)) {
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
        type: 'input',
        message: 'Office Number: ',
        name: 'officeNumber',
        validate: function(input) {
            const done = this.async();

            if(!/^[0-9]+$/.test(input)) {
                done('Please provide a valid office number', false);
                return;
            };

            done(null, true);
        }    
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

// Functions ----------------------------------------------------------------------------

// Function to ask questions about employee database
const askQuestions = async function() {
    const rawAnswers = await inquirer.prompt(employeeQuestions);    

    let rawRoleAnswers = {};

    // If Engineer, then ask Engineer related questions
    switch(rawAnswers.employeeRole){
        case 'Engineer':
            rawRoleAnswers = await inquirer.prompt(engineerQuestions);

            // Update github to be a link and add to rawAnswers
            rawAnswers.github = `https://www.github.com/${rawRoleAnswers.github}`

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
    let newId = 1;
    answers.forEach((employee) => {
        employee.id = newId;
        newId = newId + 1;
    });

    
};


// Function to create Employee objects based on answers given
const createEmployees = function() {
    answers.forEach((employee) => {
        switch(employee.employeeRole){
            case 'Engineer':
                const newEngineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
                employees.push(newEngineer);
                break;
    
            case 'Intern':
                const newIntern = new Intern(employee.name, employee.id, employee.email, employee.school);
                employees.push(newIntern);
                break;
    
            case 'Manager':
                const newManager = new Manager(employee.name, employee.id, employee.email, parseInt(employee.officeNumber));
                employees.push(newManager);
                break;
        };
    });
};


// Function to create html file
const createHTML = async function() {
    fs.writeFile('index.html', htmlInit ,(err) =>{
        err ? console.log(err) : console.log(`Wrote to index.html successfully.`);
    });

    employees.forEach((employee) => {
        // Get the unique value of employee based on role. i.e. Engineer = Github
        let employeeUnique = '';

        switch(employee.getRole()){
            case 'Engineer':
                employeeUnique = `<p> Github: <a href='${employee.getGithub()}'>${employee.getGithub()}</a></p>`;
                break;
    
            case 'Intern':
                employeeUnique = `<p>School: ${employee.getSchool().toLowerCase().split(' ').map((word) => {
                    return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ')}</p>`;
                break;
    
            case 'Manager':
                employeeUnique = `<p>Office Number: ${employee.getOfficeNumber()}</p>`;
                break;
        };

        // Write HTML to the file for each employee
        const newHTML = `       <article class="message is-info is-small is-inline-flex">
            <div class="message-header is-block">
                <p>${employee.getName().toLowerCase().split(' ').map((word) => {
                    return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ')}</p>
                <p>${employee.getRole()}</p>
            </div>
            <div class="message-body">
                <p>ID: ${employee.getId()}</p>
                <p>Email: <a href='mailto:${employee.getEmail()}'>${employee.getEmail()}</a></p>
                ${employeeUnique}
            </div>
        </article>
        `
        
        fs.appendFile('index.html',newHTML, (err) => {
            err ? console.log(err) : console.log(`Wrote to index.html successfully.`);
        });
    });
    
    // Append ending HTML tags
    fs.appendFile('index.html',htmlEnding, (err) => {
        err ? console.log(err) : console.log(`Wrote to index.html successfully.`);
    });
};






// Init to start app
const init = async function() {
    await askQuestions();
    createEmployees();
    await createHTML();
};


// Initialization of app
init();


