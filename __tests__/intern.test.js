const Intern = require('../lib/intern.js');

describe('Intern', () => {
    describe('Initialization', () => {
        it('will create an object that extends the parent class but grabs the school value', () => {

            const theIntern = new Intern('jug', 15, 'jugraj.nijjar@gmail.com', 'University of Toronto');
            console.log(theIntern);

            expect(theIntern.school).toEqual(('University of Toronto'));
        });

    });

    describe('getSchool', () => {
        it('should return the value from the "school" property', () => {

            const theIntern = new Intern('jug', 15, 'jugraj.nijjar@gmail.com', 'University of Toronto');
            expect(theIntern.getSchool()).toEqual('University of Toronto');
        });
    });

    describe('getRole', () => {
        it('should return the string thats strictly the same as the class name', () => {

            const theIntern = new Intern('jug', 15, 'jugraj.nijjar@gmail.com', 'University of Toronto');
            expect(theIntern.getRole()).toEqual('Intern');
        });
    });
})