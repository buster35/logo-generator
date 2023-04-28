# SVG Logo Generator
![GitHub](https://img.shields.io/github/license/buster35/logo-generator)
## Description
I wanted to create an SVG ("Scalable Vector Graphics") file by running a program in the command line.
My curiosity led me to undertake this project in order to further my understanding of the functionality of command line interfaces, particularly in back-end web development.
This program may help save time by providing a command line prompt-based program that will generate .svg files to suite various needs, such as logo creation.
I learned more about the power of the command line - particularly Node.js - as well as unit testing using the Jest package library.
## Table of Contents
### [Installation](#installation)
### [Usage](#usage)
### [Screenshots](#screenshots)
### [Contributions](#contributions)
### [Tests](#tests)
### [Questions](#questions)
### [License](#license)
## Installation
To install this app the user must have Node.js as well as all dependencies. To "set yourself up for success", please make sure that Node.js is installed and you are in the command line. Because this program ships with a package.json file you can simply type "npm install" in the command line while pointing at "index.js". This command should download all necessary dependencies if not already downloaded.
## Usage
To initiate the program in the command line type "node index.js" and the Inquirer prompts will begin. Once finished, the program will write a new "logo.svg" file in the root library. If the user has already created a "logo.svg" file that file will be overwritten with the new data gathered from the most current user inputs.
## Screenshots
[Walkthrough Video](https://drive.google.com/file/d/1W2qa3-0YYL17B-jCzy5V_vdxNIUZBq4r/view)

![Node Inquirer Prompts](/images/node-inquirer-prompts.png)

![Created Logo.SVG File](/images/created-logo-file.png)

![Rendered Shape](/images/rendered-shape.png)

## Contributions
No outside collaborators were brought in for this project.

The third-party assets used were: [Node.js](https://nodejs.org/en), [Inquirer](https://www.npmjs.com/package/inquirer#documentation), [Jest](https://jestjs.io/docs/getting-started)
The SVG tutorial provided by Mozilla was used and was very beneficial for helping to render different shapes, adding text and colors, etc: [MDN SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started)
## Tests
This project implemented unit testing practices via the Jest testing suite. The primary rendering classes were each tested for proper functionality, which is to parse together an SVG template string after being fed user inputs.
The user may run the same tests by entering "npm test" in the command line, which will execute the Jest testing suite. The goal is to show 1 testing suite (shapes.test.js) and 3 tests as "passed".
## Questions
Please direct any further questions to: buster35 or gilb9711@gmail.com.
## License
The license used for this project is MIT: https://choosealicense.com/licenses/mit/#.
