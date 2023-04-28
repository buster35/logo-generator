//Testing suite for the three "shape" class extensions for the parent Shape class//
//The testing suite used is Jest (see package.json)//

const Shape = require("./shapes")
const generateLogo = require("./shapes")
const Triangle = require("./shapes")
const Circle = require("./shapes")
const Square = require("./shapes")

// function generateLogo(data) {
    
//   if (data.shapeSelector === "Triangle") {
//     const triangleShape = new Triangle(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
//     triangleShape.render()
//   } else if (data.shapeSelector === "Circle") {
//     const circleShape = new Circle(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
//     circleShape.render()
//   } else if (data.shapeSelector === "Square") {
//     const squareShape = new Square(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
//     squareShape.render()
//   }
// }

describe("Shape", () => {
  describe("Triangle", () => {
    it("should be able to take in object values and change logo color as needed", function generateLogo(data) {
        if (data.shapeSelector === "Triangle") {
          const triangleShape = new Triangle(data.shapeSelector, data.logoColor, data.textColor, data.logoCharacters)
          triangleShape.render()
        }
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
  })
})

describe("Shape", () => {
  describe("Circle", () => {
    it("should be able to take in object values and change logo color as needed", () => {
      const shape = new Circle
      shape.setColor("blue")
      expect(circleShape.render()).toEqual('<circle cx="150" cy="120" r="80" fill="blue"/>');
    })
  })
})

describe("Shape", () => {
  describe("Square", () => {
    it("should be able to take in object values and change logo color as needed", () => {
      const shape = new Square
      shape.setColor("blue")
      expect(squareShape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue"/>');
    })
  })
})