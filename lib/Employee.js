class Employee {
    constructor(name, id, email) {
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