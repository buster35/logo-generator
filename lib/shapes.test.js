//Testing suite for the three "shape" class extensions for the parent Shape class//

const Shape = require("./shapes")
const Triangle = require("./shapes")
const Circle = require("./shapes")
const Square = require("./shapes")

describe("Shape", () => {
  describe("Triangle", () => {
    it("should be able to take in object values and change logo color as needed", () => {
      generateLogo() 
      const triangleShape = new Triangle
      triangleShape.setColor("blue")
      expect(triangleShape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    
    })
  })
})

describe("Shape", () => {
  describe("Circle", () => {
    it("should be able to take in object values and change logo color as needed", () => {
      const circleShape = new Circle
      circleShape.setColor("blue")
      expect(circleShape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    })
  })
})

describe("Shape", () => {
  describe("Square", () => {
    it("should be able to take in object values and change logo color as needed", () => {
      const squareShape = new Square
      squareShape.setColor("blue")
      expect(squareShape.render()).toEqual('<rect x="10" y="10" width="300" height="200" fill="blue"/>');
    })
  })
})