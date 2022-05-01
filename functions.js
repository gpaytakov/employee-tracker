const mysql = require('mysql2');
const connection = require('./db/connection.js')
const {promptUser} = require('./app.js')
const inquirer = require('inquirer');

const viewDept = ( ) => {
    const sql = `SELECT department.id AS id, department.department_name AS department FROM department`;
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        console.table(rows);
        // promptUser();    
    })
    
};
const viewRoles = ( ) => {
    const sql = `SELECT role.title AS job_title, role.department_id AS role_id, role.salary AS salary FROM role`;
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        console.table(rows);
        // promptUser();    
    })
    
};
const viewEmployees = ( ) => {
    const sql = `SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name FROM employee`;
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        console.table(rows);
        // promptUser();    
    })
    
};

module.exports = {viewDept, viewRoles, viewEmployees};
// {
//     type: 'input',
//     name: 'viewDeps',
//     message: 'Here is the list of all departments!',
//     validate: input => {
//         if (input) {
//             viewDeps();
//         } else {
//             console.log('Please enter valid department name!');
//             return false;
//         }
//     }
// },
// {
//     type: 'input',
//     name: 'addDep',
//     message: 'Please enter name of the department you want to add!',
//     validate: input => {
//         if (input) {
//             addDep();
//         } else {
//             console.log('Please enter valid department name!');
//             return false;
//         }
//     }
// },
// {
//     type: 'input',
//     name: 'viewRoles',
//     message: 'Please enter role name you want to see!',
//     validate: input => {
//         if (input) {
//             viewRoles();
//         } else {
//             console.log('Please enter valid role name!');
//             return false;
//         }
//     }
// },
// {
//     type: 'input',
//     name: 'addRole',
//     message: 'Please enter name of the department you want to add the role to!',
//     validate: input => {
//         if (input) {
//             addRole();
//         } else {
//             console.log('Please enter valid role name!');
//             return false;
//         }
//     }
// }