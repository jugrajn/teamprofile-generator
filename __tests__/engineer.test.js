const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('will create an object that extends the parent class but grabs the gitHub value', () => {

            const theEngineer = new Engineer('jug', 15, 'jugraj.nijjar@gmail.com', 'jugrajn');
            console.log(theEngineer);

            expect(theEngineer.gitHub).toEqual(('jugrajn'));
        });

    });

    describe('getGithub', () => {
        it('should return the value from the "gitHub" property', () => {

            const theEngineer = new Engineer('jug', 15, 'jugraj.nijjar@gmail.com', 'jugrajn');
            expect(theEngineer.getGithub()).toEqual('jugrajn');
        });
    });

    describe('getRole', () => {
        it('should return the string thats strictly the same as the class name', () => {

            const theEngineer = new Engineer('jug', 15, 'jugraj.nijjar@gmail.com', 'jugrajn');
            expect(theEngineer.getRole()).toEqual('Engineer');
        });
    });
})