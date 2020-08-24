const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");


// array of questions for user
function promputUser() {
return inquirer.prompt([
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
    message: "How can you test your application?"
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
    },
    {
    type: "input",
    name: "email",
    message: "Please enter your email."
    },
])};

// function to write README file with retrieved user input
function writeToFile(fileName, data) {
    // Using fs.writeFile to take three parameters and create the file.
   fs.writeFile(fileName, data, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Success!");
    }
   });
};

// function to initialize program
function init() {
    console.log("test");
    // Using answers, which is a predefined key word in Inquirer for the answers to the Inquirer prompt.
    promputUser().then(function(answers){
        // Calling the function writeToFile with the file name and the content.
        writeToFile("README.md", generateMarkdown(answers));
    });  
}

// function call to initialize program
init();