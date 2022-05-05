const mysql = require('mysql2');
const connection = require('./db/connection.js')
const func = require('./app.js')
const inquirer = require('inquirer');

const viewDept = ( ) => {
    const sql = `SELECT department.id AS id, department.department_name AS department FROM department;`;
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        console.table(rows);
        func.promptUser();    
    })
    
};
const viewRoles = ( ) => {
    const sql = `SELECT role.id AS id, role.title AS job_title, department.department_name AS department, role.salary AS salary FROM role LEFT JOIN department ON role.department_id = department.id;`;
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        console.table(rows);
        func.promptUser();   
    })
    
};
const viewEmployees = ( ) => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id=employee.manager_id;`;
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        console.table(rows);
        func.promptUser();    
    })
    
};

const addDept = ( ) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name of the department you want to add!',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter valid department name!');
                    return false;
                }
            }
        }
    ]).then(answer => {
        const sql = `INSERT INTO department (department_name) VALUES (?)`;
        connection.query(sql, [answer.name], (error, result) => {
            if (error) throw error;
            console.log(`${answer.name} is added to departments!`);
            viewDept();            
        })
    })
}

const addRole = ( ) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name of the role you want to add!',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter valid role name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter salary!',
            validate: input => {
              
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Please enter department_id!',
            validate: input => {
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Please enter department_id!',
            validate: input => {
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                    return false;
                }
            }
        }
    ]).then(answer => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?, ?)`;
        connection.query(sql, [answer.name, answer.salary, answer.department_id], (error, result) => {
            if (error) throw error;
            console.log(`${answer.name} is added to roles!`);
            viewRoles();            
        })
    })
}

const addEmployee = ( ) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Please enter the first name of an employee you want to add!',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter valid first name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Please enter the last name of an employee you want to add!',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter valid last name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Please enter role_id!',
            validate: input => {
              
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Please enter manager_id!',
            validate: input => {
              
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter a valid number!');
                    return false;
                }
            }
        }
        
    ]).then(answer => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        connection.query(sql, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (error, result) => {
            if (error) throw error;
            console.log(`${answer.name} is added to employees!`);
            viewEmployees();            
        })
    })
}

const updateEmployee = ( ) => {
    // viewEmployees();
    // viewRoles();
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id#',
            message: 'Please enter the id # of an employee you want to update role!',
            validate: input => {
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter valid number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'new_role_id#',
            message: 'Please enter the new role id # for the employee!',
            validate: input => {
                if (/^\d+$/.test(input)) {
                    return true;
                } else {
                    console.log('Please enter valid number!');
                    return false;
                }
            }
        }
        
    ]).then(answer => {
        console.log(answer);
        const sql = `UPDATE employee SET role_id = 'answer.new_role_id#' WHERE id = 'answer.id#';`;
        connection.query(sql, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (error, result) => {
            if (error) throw error;
            console.log(`${answer.name}'s role is changed to ${answer.role_id}!`);
            viewEmployees();            
        })
    })
    // const gsql = `SELECT employee. FROM employee`;
    // connection.query(gsql, (error, rows) => {
    //     if (error) throw error;
    //     // res.json({
    //     //     message: 'success',
    //     //     data: rows
    //     // });
    //     console.log(rows);
    //     return inquirer.prompt([
    //         {
    //             type: 'list',
    //             name: 'choice',
    //             choices: rows
    //         }
    //     ])         
    // })
    
}


module.exports = {viewDept, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployee};