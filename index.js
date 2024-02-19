import inquirer from "inquirer";
import { writeFileSync } from "fs";
import generatedMarkdown from "./assets/generatedMarkdown.js";

const questions = [
    {
    type: "input",
    name: "title",
    message: "Enter Title of Project:",
    },
    {
    type: "input",
    name: "description",
    message: "Enter Description of Project:",
    },
    {
    type: "input",
    name: "installation",
    message: "Enter Installation Instructions:",
    },
    {
    type: "input",
    name: "usage",
    message: "Enter Usage Information:",
    },
    {
    type: "input",
    name: "contributing",
    message: "Enter Contribution Guidelines:",
    },
    {
    type: "input",
    name: "tests",
    message: "Enter Test Instructions:",
    },
    {
    type: "rawlist",
    name: "license",
    message: "Choose a License:",
    choices: ["MPL", "GPL", "Apache", "MIT", "CC", "BSD"],
    },
    {
    type: "input",
    name: "github",
    message: "Enter Your Github Username:",
    },
    {
    type: "input",
    name: "email",
    message: "Enter Your Email Address:",
    },
];

function writeToFileSync(fileName, data) {
    try {
        writeFileSync(fileName, data, { flag: "w" });
        console.log("README.md has been generated successfully!");
    } catch (err) {
        console.log(err);
    }
}

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdown = generatedMarkdown(answers);
        writeToFileSync("generatedREADME.md", markdown);
    } catch (error) {
        console.log(error);
    }
}
init();