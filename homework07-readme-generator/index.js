// License List from "https://www.fastcompany.com/3014553/what-coders-should-know-about-copyright-licensing"
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What are you calling this project?"
    },
    {
        type: "input",
        name: "description",
        message: "How would you discribe it?"
    },
    {
        type: "input",
        name: "installation",
        message: "Does anything need installed? If so, what and how?"
    },
    {
        type: "input",
        name: "usage",
        message: "Does the user need to know anything before or about using this?"
    },
    {
        type: "list",
        name: "license",
        message: "Is a license associated with this project?",
        choices: ["mit", "cc", "wtfpl", "gpl", "lgpl", "isc", "postgresql", "nsca", "unlicense", "zlib", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "What can a user do to contribute to this repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "Any testing involved? If so, how do you run it?"
    },
    {
        type: "input",
        name: "email",
        message: "Email address to be contacted at",
        default: "I prefer to keep my email address private."
    }
];

function writeToFile(data) {
    //setup writefile
    fs.writeFileSync("GoodREADME.md", data, (err) => {
        if (err) throw err;
    });
    
}

function init() {
    //build out intialize
    inquirer.prompt(questions)

        .then(function (response) {

            api.getUser(response.github).then(function(data1) {

                // console.log(data1);
                
                writeToFile(generateMarkdown(response, data1));
        });
    });
};

init();
