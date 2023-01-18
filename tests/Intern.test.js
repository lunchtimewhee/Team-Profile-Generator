const Intern = require('../lib/Intern');

describe('Intern', () => {
    
    // Test for constructor
    describe('Initialization', () => {
        it('should create an Intern object with name, id, email if provided with valid arguments', () => {
            const newIntern = new Intern('Rob', 1, 'Rob@gmail.com', 'Northeastern University');

            expect(newIntern.name).toEqual('Rob');
            expect(newIntern.id).toEqual(1);
            expect(newIntern.email).toEqual('Rob@gmail.com');
            expect(newIntern.school).toEqual('Northeastern University');
        })

        it("should throw an error if provided no arguments", () => {
            const newIntern = () => new Intern();
    
            expect(newIntern).toThrow();
        });
    
        it("should throw an error if id is a non-number or negative number", () => {
            const newIntern = () => new Intern('Rob', '1','Rob@gmail.com','Northeastern University');
        
            const err = new Error("Expected parameter 'id' to be a non-negative number");
        
            expect(newIntern).toThrowError(err);
        });
    
        it("should throw an error if 'name' is not a string", () => {
            const newIntern = () => new Intern(1, 1, 'Rob@gmail.com','Northeastern University');
            const err = new Error("Expected parameter 'name' to be a non-empty string");
        
            expect(newIntern).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const newIntern = () => new Intern('Rob', 1, 1,'Northeastern University');
            const err = new Error("Expected parameter 'email' to be a non-empty string");
        
            expect(newIntern).toThrowError(err);
        });

        it("should throw an error if 'email' does not have an @", () => {
            const newIntern = () => new Intern('Rob', 1, 'Rob','Northeastern University');
            const err = new Error("Invalid Email, no @ symbol");
        
            expect(newIntern).toThrowError(err);
        });

        it("should throw an error if 'School' is not a string", () => {
            const newIntern = () => new Intern('Rob', 1, 'Rob@gmail.com', 1);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
        
            expect(newIntern).toThrowError(err);
        });
    });

    // Test for getName function
    describe('getName', () => {
        it('should return name of Intern', () => {
            const newIntern = new Intern('Rob', 1, 'Rob@gmail.com','Northeastern University');

            expect(newIntern.getName()).toEqual('Rob');
        })
    })

    // Test for getId function
    describe('getId', () => {
        it('should return id of Intern', () => {
            const newIntern = new Intern('Rob', 1, 'Rob@gmail.com','Northeastern University');

            expect(newIntern.getId()).toEqual(1);
        })
    })

    // Test for getEmail function
    describe('getEmail', () => {
        it('should return email of Intern', () => {
            const newIntern = new Intern('Rob', 1, 'Rob@gmail.com','Northeastern University');

            expect(newIntern.getEmail()).toEqual('Rob@gmail.com');
        })
    })

    // Test for getSchool function
    describe('getSchool', () => {
        it('should return Github of Intern', () => {
            const newIntern = new Intern('Rob', 1, 'Rob@gmail.com','Northeastern University');

            expect(newIntern.getSchool()).toEqual('Northeastern University');
        })
    })

    // Test for getRole function
    describe('getRole', () => {
        it('should return role of Intern', () => {
            const newIntern = new Intern('Rob', 1, 'Rob@gmail.com','Northeastern University');

            expect(newIntern.getRole()).toEqual('Intern');
        })
    })

})