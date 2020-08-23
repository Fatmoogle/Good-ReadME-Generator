const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");


// array of questions for user
function promputUser() {
inquirer.prompt([
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
       if(err) {
        // If any error occurred when creating the file, show the error.
        console.log(err);

        // Otherwise, success!
        console.log("Success! Your file was created.");
       };
   });
};

// function to initialize program
function init() {
    writeToFile();
}

// function call to initialize program
init();



// function promptUser() {
//     return inquirer.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//       },
//       {
//         type: "input",
//         name: "location",
//         message: "Where are you from?"
//       },
//       {
//         type: "input",
//         name: "hobby",
//         message: "What is your favorite hobby?"
//       },
//       {
//         type: "input",
//         name: "food",
//         message: "What is your favorite food?"
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Enter your GitHub Username"
//       },
//       {
//         type: "input",
//         name: "linkedin",
//         message: "Enter your LinkedIn URL."
//       }
//     ]);
//   }