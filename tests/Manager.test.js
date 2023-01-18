const Manager = require('../lib/Manager');

describe('Manager', () => {
    
    // Test for constructor
    describe('Initialization', () => {
        it('should create an Manager object with name, id, email if provided with valid arguments', () => {
            const newManager = new Manager('Dob', 1, 'Dob@gmail.com', 5);

            expect(newManager.name).toEqual('Dob');
            expect(newManager.id).toEqual(1);
            expect(newManager.email).toEqual('Dob@gmail.com');
            expect(newManager.officeNumber).toEqual(5);
        })

        it("should throw an error if provided no arguments", () => {
            const newManager = () => new Manager();
    
            expect(newManager).toThrow();
        });
    
        it("should throw an error if id is a non-number or negative number", () => {
            const newManager = () => new Manager('Dob', '1','Dob@gmail.com',5);
        
            const err = new Error("Expected parameter 'id' to be a non-negative number");
        
            expect(newManager).toThrowError(err);
        });
    
        it("should throw an error if 'name' is not a string", () => {
            const newManager = () => new Manager(1, 1, 'Dob@gmail.com',5);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
        
            expect(newManager).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const newManager = () => new Manager('Dob', 1, 1,5);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
        
            expect(newManager).toThrowError(err);
        });

        it("should throw an error if 'email' does not have an @", () => {
            const newManager = () => new Manager('Dob', 1, 'Dob',5);
            const err = new Error("Invalid Email, no @ symbol");
        
            expect(newManager).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is not a string", () => {
            const newManager = () => new Manager('Dob', 1, 'Dob@gmail.com', '5');
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
        
            expect(newManager).toThrowError(err);
        });
    });

    // Test for getName function
    describe('getName', () => {
        it('should return name of Manager', () => {
            const newManager = new Manager('Dob', 1, 'Dob@gmail.com',5);

            expect(newManager.getName()).toEqual('Dob');
        })
    })

    // Test for getId function
    describe('getId', () => {
        it('should return id of Manager', () => {
            const newManager = new Manager('Dob', 1, 'Dob@gmail.com',5);

            expect(newManager.getId()).toEqual(1);
        })
    })

    // Test for getEmail function
    describe('getEmail', () => {
        it('should return email of Manager', () => {
            const newManager = new Manager('Dob', 1, 'Dob@gmail.com',5);

            expect(newManager.getEmail()).toEqual('Dob@gmail.com');
        })
    })

    // Test for getOfficeNumber function
    describe('getOfficeNumber', () => {
        it('should return Github of Manager', () => {
            const newManager = new Manager('Dob', 1, 'Dob@gmail.com',5);

            expect(newManager.getOfficeNumber()).toEqual(5);
        })
    })

    // Test for getRole function
    describe('getRole', () => {
        it('should return role of Manager', () => {
            const newManager = new Manager('Dob', 1, 'Dob@gmail.com',5);

            expect(newManager.getRole()).toEqual('Manager');
        })
    })

})