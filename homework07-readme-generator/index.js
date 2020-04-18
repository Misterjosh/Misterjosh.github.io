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
        choices: ["MIT", "Apache 2.0", "GPL Lv3", "Affero GPL", "Artistic License 2.0", "BSD 2-Clause License", "BSD 3-Clause License", "Eclipse Public License v1.0", "LGPL v2.1", "LGPL v3", "Mozilla Public License Version 2.0", "Public Domain (Unlicense)", "None" ]
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
