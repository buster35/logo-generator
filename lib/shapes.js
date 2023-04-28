//exports Triangle, Circle and Square classes

const fs = require("fs")
const writeToSVG = require("../index.js")
module.exports = generateLogo

const fileName = "logo.svg"


function generateLogo(data) {
    
    if (data.shapeSelector === "Triangle") {
      const triangleShape = new Triangle(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
      triangleShape.render()
    } else if (data.shapeSelector === "Circle") {
      const circleShape = new Circle(data.logoCharacters, data.logoColor, data.textColor, data.shapeSelector)
      circleShape.render()
    } else if (data.shapeSelector === "Square") {
      const squareShape = new Square(data.logoCharacters, data.textColor, data.logoColor, data.shapeSelector)
      squareShape.render()
    }
}

class Shape {
  constructor(logoCharacters, textColor) {
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }
  }

class Triangle extends Shape { //we want this to do something specific with the triangle shape, which is to render a triangle shape//
  constructor(logoCharacters, textColor, shapeSelector, logoColor) {
    super(logoCharacters, textColor, logoColor);
    this.triangle = shapeSelector;
  }

  render() { 
    this.triangle = `<svg version="1.1"
    width="300" height="200"
    xmlns="https://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text></svg>`

    writeToSVG(fileName, this.triangle)
  }
}

class Circle extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, textColor, logoColor);
    this.circle = shapeSelector;
  }
  
  render() {
    this.circle = `<svg version="1.1"
    width="300" height="200"
    xmlns="https://www.w3.org/2000/svg"><circle cx="25" cy="75" r="20" fill="${this.logoColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text></svg>`

    writeToSVG(fileName, this.circle)
  }
}

class Square extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, textColor, logoColor);
    this.square = shapeSelector;
  }

  render() {
    this.square = `<svg version="1.1"
    width="300" height="200"
    xmlns="https://www.w3.org/2000/svg"><rect x="10" y="10" width="300" height="200" fill="${this.logoColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text></svg>`

    writeToSVG(fileName, this.square)
  }
}