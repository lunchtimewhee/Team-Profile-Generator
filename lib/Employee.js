class Employee {
    constructor(name, id, email) {
        
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
      

        this.name = name;
        this.id = id;
        this.email = email;
    };


  
    // Returns employee name
    getName() {
        return this.name;
    };

    // Returns employee id
    getId() {
        return this.id;
    };

    // Returns employee email
    getEmail() {
        return this.email;
    };
  
    // Returns 'employee' as the role for this object
    getRole() {
        return  'Employee';
    };

  };
  
  module.exports = Employee;