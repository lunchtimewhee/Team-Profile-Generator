const Employee = require('./Employee');

class Manager extends Employee{
    // Constructor for Manager
    constructor(name, id, email, officeNumber) {
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