const Employee = require('./Employee');

class Manager extends Employee{
    // Constructor for Manager
    constructor(name, id, email, officeNumber) {
        
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

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }
      
        super(name, id, email);
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    };

    // Return Manager's officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    };

    // Return Manager's role
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;