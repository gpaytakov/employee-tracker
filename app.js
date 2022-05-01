const path = require('path')
// inquirer is imported
const inquirer = require('inquirer');
// mysql2 is imported
const mysql = require('mysql2');
// console.table is imported
const cT = require('console.table');
const {viewDept, viewRoles, viewEmployees, addDept} = require('./functions.js')


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
                'add an employee manager',
                // 'view employees by manager',
                // 'view employees by department',
                // 'delete department',
                // 'delete roles',
                // 'delete employees',
                // 'view the total utilized budget of a department'
            ]
        }
    ]).then((answer) => {
        let choice = Object.values(answer);
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

        

            // case 'add a department':
            //     addDept();
            //     break;
            // case 'add a role':
            //     addRole();
            //     break;
            // case 'add an employee':
            //     addEmployee();
            //     break;
            // case 'update an employee role':
            //     addEmpRole();
            // case 'add an employee manager':
            //     addEmpManager();
            //     break;
            // case 'view employees by manager':
            //     addEmpByManager();
            //     break;
            // case 'view employees by department':
            //     viewEmpByDept();
            //     break;
            // case 'delete department':
            //     delDept();
            //     break;
            // case 'delete roles':
            //     delRoles();
            //     break;
            // case 'delete employees':
            //     delEmp();
            //     break;
            // default:
            //     console.log(answer + 'is not an option!');

        
    })
}

promptUser();

exports.promptUser=promptUser;







