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

            getName('jug');
            expect(this.name).toEqual('jug');
        });
    });
})