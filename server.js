
// inquirer is imported
const inquirer = require('inquirer');
// mysql2 is imported
const mysql = require('mysql2');
// console.table is imported
const cT = require('console.table');

// questions to navigate tasks
const questions = [
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
        'add an employee manager',
        'view employees by manager',
        'view employees by department',
        'delete department',
        'delete roles',
        'delete employees',
        'view the total utilized budget of a department'
    ]
},
{
    type: 'input',
    name: 'viewDeps',
    message: 'Here is the list of all departments!',
    validate: input => {
        if (input) {
            return viewDeps();
        } else {
            console.log('Please enter valid department name!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'addDep',
    message: 'Please enter name of the department you want to add!',
    validate: input => {
        if (input) {
            return addDep();
        } else {
            console.log('Please enter valid department name!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'viewRoles',
    message: 'Please enter role name you want to see!',
    validate: input => {
        if (input === roles.title) {
            return viewRoles();
        } else {
            console.log('Please enter valid role name!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'addRole',
    message: 'Please enter name of the department you want to add the role to!',
    validate: input => {
        if (input) {
            return addRole();
        } else {
            console.log('Please enter valid role name!');
            return false;
        }
    }
}

]







