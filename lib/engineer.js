const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub
    };

    getGithub() {

    };

    getRole() {

    };

};

module.exports = Engineer;