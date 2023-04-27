//exports Triangle, Circle and Square classes

const fs = require("fs")
const writeToSVG = require("../index.js")
module.exports = generateLogo


function generateLogo(data) {
    
    if (data.shapeSelector === "Triangle") {
      const triangleShape = new Triangle(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
      triangleShape.render()
    } else if (data.shapeSelector === "Circle") {
      const circleShape = new Circle(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
      circleShape.render()
    } else if (data.shapeSelector === "Square") {
      const squareShape = new Square(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
      console.info(squareShape.render())
    }
}

class Shape {
  //we're taking this info stored in the object to populate a string template literal, which will be used to write our new SVG file with writeToSVG!//
  constructor(logoCharacters, textColor, logoColor) {
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }
  // writeToSVG(fileName, file)
  
  }

class Triangle extends Shape { //we want this to do something specific with the triangle shape, which is to render a triangle shape//
  constructor(logoCharacters, textColor, logoColor, shapeSelector) {
    super(logoCharacters, textColor, logoColor);
    this.triangle = shapeSelector;
  }

  render() { 
    this.triangle = `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>`
    return this.triangle
  }
}

class Circle extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, textColor, logoColor);
    this.circle = shapeSelector;
  }

  render() {
    this.circle = `<circle cx="25" cy="75" r="20" fill="${this.logoColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>`
    return this.circle
  }
}

class Square extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, textColor, logoColor);
    this.square = shapeSelector;
  }

  render() {
    this.square = `<rect x="10" y="10" width="30" height="30" fill="${this.logoColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>`
    return this.square
  }
}