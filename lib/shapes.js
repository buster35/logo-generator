//exports Triangle, Circle and Square classes
class Shape {
  constructor(logoCharacters, textColor, logoColor) {
    this.logoCharacters = logoCharacters;
    this.textColor = textColor;
    this.logoColor = logoColor;
  }

  parseSVG() {
    return `<${this.shapeSelector} x="10" y="10" width="300" height="200" fill="${this.logoColor}`
  }
}
let rectangle = `<rect x="10" y="10" width="300" height="200" stroke="black" fill="transparent" stroke-width="5"/>`
class Triangle extends Shape {
  constructor(logoCharacters, textColor, logoColor, shapeSelector) {
    super(logoCharacters, logoColor, textColor);
    this.triangle = shapeSelector;
  }
  
  render() {//we're creating a render method
    return 
  }

}

class Circle extends Shape {
  constructor(logoCharacters, shapeSelector, textColor, logoColor) {
    super(logoCharacters, logoColor, textColor);
    this.circle = shapeSelector;
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
  render() {
    
  }

}

module.exports = { Shape }