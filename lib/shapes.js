//exports Triangle, Circle and Square classes
class Shape {
  constructor(text, shape, color) {

  }
}
class Triangle extends Shape {
  constructor(shape, color) { //template for triangle objects
    this.shape = shape;
    this.color = color;
  }

  render() {//we're creating a render method

  }

}

class Circle extends Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  render() {

  }

}

class Square extends Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  render() {

  }

}

module.exports = { Shape }