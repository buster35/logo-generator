//Testing suite for the three "shape" class extensions for the parent Shape class//
//The testing suite used is Jest (see package.json)//

const Shape = require("./shapes")
const Triangle = require("./shapes")
const Circle = require("./shapes")
const Square = require("./shapes")

describe("Shape", () => {
  describe("Triangle", () => {
    it("should be able to take in object values and change logo color as needed", () => {
      const testShape = "Triangle";
      const testLogoColor = "red";
      const testTextColor = "blue";
      const testLogo = "abc";
      
      const shape = new Triangle("Triangle", testLogoColor, testTextColor, testLogo)
      
      const result = this.result.render()
      expect(result).toEqual(this.shape = `<svg version="1.1"
      width="300" height="200"
      xmlns="https://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${testLogoColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${testTextColor}">${testLogo}</text></svg>`);
    })
  })
})

// describe("Shape", () => {
//   describe("Circle", () => {
//     it("should be able to take in object values and change logo color as needed", () => {
//       const shape = new Circle
//       shape.setColor("blue")
//       expect(circleShape.render()).toEqual('<circle cx="150" cy="120" r="80" fill="blue"/>');
//     })
//   })
// })

// describe("Shape", () => {
//   describe("Square", () => {
//     it("should be able to take in object values and change logo color as needed", () => {
//       const shape = new Square
//       shape.setColor("blue")
//       expect(squareShape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue"/>');
//     })
//   })
// })