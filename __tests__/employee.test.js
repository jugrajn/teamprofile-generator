const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('Initialization', () => {
        it('will create an object with the properties name, id, and email', () => {

            const theEmployee = new Employee('jug', 15, 'jugraj.nijjar@gmail.com');
            console.log(theEmployee);

            expect(theEmployee.name).toEqual(('jug'));
            expect(theEmployee.id).toEqual((15));
            expect(theEmployee.email).toEqual(('jugraj.nijjar@gmail.com'));
        });

    });

    describe('getName', () => {
        it('should return the value from the "name" property', () => {

            const theEmployee = new Employee('jug', 15, 'jugraj.nijjar@gmail.com');
            expect(theEmployee.getName()).toEqual('jug');
        });
    });

    describe('getID', () => {
        it('should return the value from the "id" property', () => {

            const theEmployee = new Employee('jug', 15, 'jugraj.nijjar@gmail.com');
            expect(theEmployee.getId()).toEqual(15);
        });
    });

    describe('getEmail', () => {
        it('should return the value from the "email" property', () => {

            const theEmployee = new Employee('jug', 15, 'jugraj.nijjar@gmail.com');
            expect(theEmployee.getEmail()).toEqual('jugraj.nijjar@gmail.com');
        });
    });

    describe('getName', () => {
        it('should call a string thats exactly the same as the class name', () => {

            const theEmployee = new Employee('jug', 15, 'jugraj.nijjar@gmail.com');
            expect(theEmployee.getRole()).toEqual('Employee');
        });
    });

})