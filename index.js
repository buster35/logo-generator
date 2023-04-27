//we are requiring in the necessary dependencies for this program to run, the built in fs package and the third-party inquirer package//
const inquirer = require("inquirer");
const fs = require("fs");
module.exports = writeToSVG;
const generateLogo = require("./lib/shapes.js")

let userData = [
  {
    type: "input",
    message:
      "What characters would you like to add to your logo? (Up to 3, uppercase/lowercase fine)",
    name: "logoCharacters",
  },
  {
    type: "input",
    message:
      "What color would you like your text to be? You may enter a color keyword OR a hexadecimal number code.",
    name: "textColor",
  },
  {
    type: "list",
    message:
      "Please select which shape you'd like your logo to be from the following list of shapes:",
    name: "shapeSelector",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message:
      "What color would you like your shape (background) to be? You may enter a color keyword OR a hexadecimal number code.",
    name: "logoColor",
  },
];

function init() {
  inquirer.prompt(userData).then((response) => {
    console.log(response)
    generateLogo(response) //working
  });
}

function writeToSVG(fileName, file) {
  fs.writeFile(fileName, file, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

init();


