//exports Triangle, Circle and Square classes
//KISS
//In the previous hw we were producing one thing; here, there are 4^^4 possible combinations, so having a template to input userData is important in order to save time and resources//

const fs = require("fs")
const writeToSVG = require("../index.js")
module.exports = generateLogo



function generateLogo(data) { //receiving info; working//
    console.info(data)
    
    if (data.shapeSelector === "Triangle") {
      const triangleShape = new Triangle(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
    } else if (data.shapeSelector === "Circle") {
      const circleShape = new Circle(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
    } else if (data.shapeSelector === "Square") {
      const squareShape = new Square(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
    }
}

class Shape {
  //we're taking this info stored in the object to populate a string template literal, which will be used to write our new SVG file with writeToSVG!//
  constructor(logoCharacters, textColor) {
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
  }

  setTextColor() {

  }

  setlogoCharacters() {
      
  }

  renderSVGString() {

  }
  // writeToSVG(fileName, file)
  
  }

class Triangle extends Shape { //we want this to do something specific with the triangle shape
  constructor(logoCharacters, textColor, logoColor, shapeSelector) {
    super(logoCharacters, textColor);
    this.triangle = shapeSelector;
    this.logoColor = logoColor;
  }

  // triangleShape.render(`<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />`) ???

  setColor() { //how to get 
    return this.logoColor
  }

  render() { 
    
  }

}

class Circle extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, textColor);
    this.circle = shapeSelector;
    this.logoColor = logoColor;
  }

  setColor() {

  }

  render() {
    
  }

}

class Square extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, textColor);
    this.square = shapeSelector;
    this.logoColor = logoColor;
  }

setColor() {

}

  render() {
    
  }

}
// let rectangle = `<rect x="10" y="10" width="300" height="200" stroke="black" fill="transparent" stroke-width="5"/>`