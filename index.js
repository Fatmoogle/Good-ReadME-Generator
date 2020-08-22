const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
    },
    {
    type: "input",
    name: "description",
    message: "Please write a short description of your project."
    },
    {
    type: "input",
    name: "installation",
    message: "How do you install the project?"
    },
    {
    type: "input",
    name: "usage",
    message: "How do you use this project?"
    },
    {
    type: "input",
    name: "license",
    message: "What license does your project have?"
    },
    {
    type: "input",
    name: "author",
    message: "Please list the author(s) of the project."
    },
    {
    type: "input",
    name: "contributions",
    message: "If you would like to have others use this code or contribute it, please write your message here."
    },
    {
    type: "input",
    name: "tests",
    message: "TBD"
    },
    {
    type: "input",
    name: "username",
    message: "Please eneter your GitHub username."
    },
    {
    type: "input",
    name: "url",
    message: "Please enter your GitHub URL."
    }
    {
    type: "input",
    name: "email",
    message: "Please enter your email."
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
