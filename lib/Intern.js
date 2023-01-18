const Employee = require('./Employee');

class Intern extends Employee{
    // Constructor of Intern
    constructor(name, id, email, school){
        // Check to make sure that all parameters are filled out. 
        if(typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if(typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        if(!email.includes('@')) {
            throw new Error("Invalid Email, no @ symbol");
        }

        if(typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
      
        super(name, id, email);
        
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