var Employee = require('./Employee');


class Engineer extends Employee{
    // Constructor for Engineer
    constructor(name, id, email, github){
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

