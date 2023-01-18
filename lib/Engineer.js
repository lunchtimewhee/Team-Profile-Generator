var Employee = require('./Employee');


class Engineer extends Employee{
    // Constructor for Engineer
    constructor(name, id, email, github){
        
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

        if(typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
      
        super(name, id, email);

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    };

    // Return Employee Github
    getGithub(){
        return this.github;
    };

    // Return Engineer role
    getRole(){
        return 'Engineer';
    };
};

module.exports = Engineer;

