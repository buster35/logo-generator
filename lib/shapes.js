//exports Triangle, Circle and Square classes

const fs = require("fs")
const writeToSVG = require("../index.js")
module.exports = generateLogo

const fileName = "logo.svg"


function generateLogo(data) {
    
    if (data.shapeSelector === "Triangle") {
      const triangleShape = new Triangle(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
      triangleShape.render()
    } else if (data.shapeSelector === "Circle") {
      const circleShape = new Circle(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
      circleShape.render()
    } else if (data.shapeSelector === "Square") {
      const squareShape = new Square(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
      squareShape.render()
    }
}

class Shape {
  constructor(logoColor, textColor, logoCharacters) {
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }
  }

class Triangle extends Shape { //we want this to do something specific with the triangle shape, which is to render a triangle shape//
  constructor(shapeSelector, logoColor, textColor, logoCharacters) {
    super(logoColor, textColor, logoCharacters);
    this.triangle = shapeSelector;
  }

  setColor(color) {
    this.logoColor = color
  }

  render() { 
    this.triangle = `<svg version="1.1"
    width="300" height="200"
    xmlns="https://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text></svg>`

    writeToSVG(fileName, this.triangle)
  }
}

class Circle extends Shape {
  constructor(shapeSelector, logoColor, textColor, logoCharacters) {
    super(logoColor, textColor, logoCharacters);
    this.circle = shapeSelector;
  }

  setColor(color) {
    this.logoColor = color
  }

  render() {
    this.circle = `<svg version="1.1"
    width="300" height="200"
    xmlns="https://www.w3.org/2000/svg"><circle cx="150" cy="120" r="80" fill="${this.logoColor}"/><text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text></svg>`

    writeToSVG(fileName, this.circle)
  }
}

class Square extends Shape {
  constructor(shapeSelector, logoColor, textColor, logoCharacters) {
    super(logoColor, textColor, logoCharacters);
    this.square = shapeSelector;
  }

  setColor(color) {
    this.logoColor = color
  }

  render() {
    this.square = `<svg version="1.1"
    width="300" height="200"
    xmlns="https://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.logoColor}"/><text x="150" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text></svg>`

    writeToSVG(fileName, this.square)
  }
}

