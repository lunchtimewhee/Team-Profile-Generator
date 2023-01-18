const Employee = require('../lib/Employee');

describe('Employee', () => {
    
    // Test for constructor
    describe('Initialization', () => {
        it('should create an Employee object with name, id, email if provided with valid arguments', () => {
            const newEmployee = new Employee('Bob', 1, 'bob@gmail.com');

            expect(newEmployee.name).toEqual('Bob');
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual('bob@gmail.com');
        })

        it("should throw an error if provided no arguments", () => {
            const newEmployee = () => new Employee();
    
            expect(newEmployee).toThrow();
        });
    
        it("should throw an error if id is a non-number or negative number", () => {
            const newEmployee = () => new Employee('Bob', '1','bob@gmail.com');
        
            const err = new Error("Expected parameter 'id' to be a non-negative number");
        
            expect(newEmployee).toThrowError(err);
        });
    
        it("should throw an error if 'name' is not a string", () => {
            const newEmployee = () => new Employee(1, 1, 'bob@gmail.com');
            const err = new Error("Expected parameter 'name' to be a non-empty string");
        
            expect(newEmployee).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const newEmployee = () => new Employee('Bob', 1, 1);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
        
            expect(newEmployee).toThrowError(err);
        });

        it("should throw an error if 'email' does not have an @", () => {
            const newEmployee = () => new Employee('Bob', 1, 'bob');
            const err = new Error("Invalid Email, no @ symbol");
        
            expect(newEmployee).toThrowError(err);
        });
    });

    // Test for getName function
    describe('getName', () => {
        it('should return name of employee', () => {
            const newEmployee = new Employee('Bob', 1, 'bob@gmail.com');

            expect(newEmployee.getName()).toEqual('Bob');
        })
    })

    // Test for getId function
    describe('getId', () => {
        it('should return id of employee', () => {
            const newEmployee = new Employee('Bob', 1, 'bob@gmail.com');

            expect(newEmployee.getId()).toEqual(1);
        })
    })

    // Test for getEmail function
    describe('getEmail', () => {
        it('should return email of employee', () => {
            const newEmployee = new Employee('Bob', 1, 'bob@gmail.com');

            expect(newEmployee.getEmail()).toEqual('bob@gmail.com');
        })
    })

    // Test for getRole function
    describe('getRole', () => {
        it('should return role of employee', () => {
            const newEmployee = new Employee('Bob', 1, 'bob@gmail.com');

            expect(newEmployee.getRole()).toEqual('Employee');
        })
    })

})