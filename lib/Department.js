class Department {
    constructor (department_name) {
        this.department_name = department_name;
    }

    getDeptName() {
        return this.department_name;
    }
}

module.exports = Department;