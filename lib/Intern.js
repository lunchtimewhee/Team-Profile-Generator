const Employee = require('./Employee');

class Intern extends Employee{
    // Constructor of Intern
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    };

    // Return Intern's school
    getSchool() {
        return this.school;
    };

    // Return role for Intern
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;