const Manager = require('module');
const Engineer = require('module');
const Intern = require('module');
const inquirer = require('inquirer');
const generatePage = require("./src/template")
const teamMembers = [];


function createManager() {
    inquierer
    .prompt([
        {
            type: "input",
            name: managerName,
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: managerId,
            message: "What is the manager's Id?"
        },
        {
            type: "input",
            name: managerEmail,
            message: "What is the manager's e-mail address?"
        }
    ])
}