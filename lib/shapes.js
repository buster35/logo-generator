//exports Triangle, Circle and Square classes
//i need to at least finish these classes so that I can test them
//then, I need to see what i need to do to link the .js files


const fs = require("fs");
const writeToSVG = require("../index.js");
module.exports = generateLogo

function generateLogo (data) {
    console.log(data)
}

// writeToSVG(fileName, file)

class Shape { //most of the stuff is going to go in here; it's a template for objects, and with the data from these objects we have user-made methods we can use to do stuff we need to do with it//
  constructor(logoCharacters, textColor, logoColor) {
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }

  

  setTextColor() {

  }

  setlogoCharacters() {
      
  }

  renderSVGString() {

  }
  
  }

let rectangle = `<rect x="10" y="10" width="300" height="200" stroke="black" fill="transparent" stroke-width="5"/>`
class Triangle extends Shape { //we want this to do something specific with the triangle shape
  constructor(logoCharacters, textColor, logoColor, shapeSelector) {
    super(logoCharacters, logoColor, textColor);
    this.triangle = shapeSelector;
    this.logoColor = logoColor;
  }
  setColor() {

  }

  render() { 
    console.log('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
  }

}

const shape = new Triangle(
  
)


class Circle extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, logoColor, textColor);
    this.circle = shapeSelector;
  }

  setColor() {

  }

  render() {
    
  }

}

class Square extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, logoColor, textColor);
    this.square = shapeSelector;
  }
//shapeSelector = rect
setColor() {

}

  render() {
    
  }

}

module.exports = { Shape }