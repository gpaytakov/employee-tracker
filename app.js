const path = require('path')
// inquirer is imported
const inquirer = require('inquirer');
// mysql2 is imported
const mysql = require('mysql2');
// console.table is imported
const cT = require('console.table');
const {viewDept, viewRoles, viewEmployees, addDept, addRole, addEmployee, updateEmployee} = require('./functions.js');
const connection = require('./db/connection.js');


// questions to navigate tasks
const promptUser = async () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role', 
                'add an employee', 
                'update an employee role',
                'exit' 
            ]
        }
    ]).then((answer) => {
        let choice = answer.task;
        if (choice == 'view all departments') {
            viewDept();
        };
        if (choice == 'view all roles') {
            viewRoles();
        };
        if (choice == 'view all employees') {
            viewEmployees();
        };
        if (choice == 'add a department') {
            addDept();
        };
        if (choice == 'add a role') {
            addRole();
        };
        if (choice == 'add an employee') {
            addEmployee();
        };
        if (choice == 'update an employee role') {
            updateEmployee();
        };
        if (choice == 'exit') {
            connection.end();
        };    
    })
}

promptUser();

exports.promptUser=promptUser;







