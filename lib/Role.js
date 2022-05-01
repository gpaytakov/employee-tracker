const Department = require('./Department');
class Role extends Department {
    constructor (title, salary, department_id) {
        super (department_id);
        this.title = title;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getTitle() {
        return this.title;
    }
}
module.exports = Role;