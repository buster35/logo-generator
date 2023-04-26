const fs = require("fs")
const inquirer = require("inquirer")
module.exports = ;


let userData = [
  {
    type: "input",
    message: "What characters would you like to add to your logo? (Up to 3, uppercase/lowercase fine)",
    name: "logoCharacters"
  },
  {
    type: "input",
    message: "What color would you like your text to be? You may enter a color keyword OR a hexadecimal number code.",
    name: "textColor"
  },
  {
    type: "input",
    message: "Please select which shape you'd like your logo to be from the following list of shapes:",
    name: "shapeSelector",
    choices: ["Circle", "Triangle", "Square"]
  },
  {
    type: "input",
    message: "What color would you like your shape (background) to be? You may enter a color keyword OR a hexadecimal number code.",
    name: "logoColor"
  },
]

inquirer.prompt(userData)
