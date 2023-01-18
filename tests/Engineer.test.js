const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    
    // Test for constructor
    describe('Initialization', () => {
        it('should create an Engineer object with name, id, email if provided with valid arguments', () => {
            const newEngineer = new Engineer('Bob', 1, 'bob@gmail.com', 'github.com/bobby');

            expect(newEngineer.name).toEqual('Bob');
            expect(newEngineer.id).toEqual(1);
            expect(newEngineer.email).toEqual('bob@gmail.com');
            expect(newEngineer.github).toEqual('github.com/bobby');
        })

        it("should throw an error if provided no arguments", () => {
            const newEngineer = () => new Engineer();
    
            expect(newEngineer).toThrow();
        });
    
        it("should throw an error if id is a non-number or negative number", () => {
            const newEngineer = () => new Engineer('Bob', '1','bob@gmail.com','github.com/bobby');
        
            const err = new Error("Expected parameter 'id' to be a non-negative number");
        
            expect(newEngineer).toThrowError(err);
        });
    
        it("should throw an error if 'name' is not a string", () => {
            const newEngineer = () => new Engineer(1, 1, 'bob@gmail.com','github.com/bobby');
            const err = new Error("Expected parameter 'name' to be a non-empty string");
        
            expect(newEngineer).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const newEngineer = () => new Engineer('Bob', 1, 1,'github.com/bobby');
            const err = new Error("Expected parameter 'email' to be a non-empty string");
        
            expect(newEngineer).toThrowError(err);
        });

        it("should throw an error if 'email' does not have an @", () => {
            const newEngineer = () => new Engineer('Bob', 1, 'bob','github.com/bobby');
            const err = new Error("Invalid Email, no @ symbol");
        
            expect(newEngineer).toThrowError(err);
        });

        it("should throw an error if 'Github' is not a string", () => {
            const newEngineer = () => new Engineer('Bob', 1, 'bob@gmail.com', 1);
            const err = new Error("Expected parameter 'github' to be a non-empty string");
        
            expect(newEngineer).toThrowError(err);
        });
    });

    // Test for getName function
    describe('getName', () => {
        it('should return name of Engineer', () => {
            const newEngineer = new Engineer('Bob', 1, 'bob@gmail.com','github.com/bobby');

            expect(newEngineer.getName()).toEqual('Bob');
        })
    })

    // Test for getId function
    describe('getId', () => {
        it('should return id of Engineer', () => {
            const newEngineer = new Engineer('Bob', 1, 'bob@gmail.com','github.com/bobby');

            expect(newEngineer.getId()).toEqual(1);
        })
    })

    // Test for getEmail function
    describe('getEmail', () => {
        it('should return email of Engineer', () => {
            const newEngineer = new Engineer('Bob', 1, 'bob@gmail.com','github.com/bobby');

            expect(newEngineer.getEmail()).toEqual('bob@gmail.com','github.com/bobby');
        })
    })

    // Test for getGithub function
    describe('getGithub', () => {
        it('should return Github of Engineer', () => {
            const newEngineer = new Engineer('Bob', 1, 'bob@gmail.com','github.com/bobby');

            expect(newEngineer.getGithub()).toEqual('github.com/bobby');
        })
    })

    // Test for getRole function
    describe('getRole', () => {
        it('should return role of Engineer', () => {
            const newEngineer = new Engineer('Bob', 1, 'bob@gmail.com','github.com/bobby');

            expect(newEngineer.getRole()).toEqual('Engineer');
        })
    })

})