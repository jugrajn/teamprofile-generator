const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('will create an object that extends the parent class but grabs the officeNumber value', () => {

            const theManager = new Manager('jug', 15, 'jugraj.nijjar@gmail.com', '015');
            console.log(theManager);

            expect(theManager.officeNumber).toEqual('015');
        });

    });

    describe('getRole', () => {
        it('should return the same string as the name of the class', () => {

            const theManager = new Manager('jug', 15, 'jugraj.nijjar@gmail.com', '015');
            expect(theManager.getRole()).toEqual('Manager');
        });
    });
})