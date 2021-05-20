const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, school) {

    }

    getRole() {
        return "Manager";
    }

   
}


module.exports = Manager;