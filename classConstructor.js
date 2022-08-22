class Cat {
  constructor(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
  }
  catDetails() {
    console.log(
      `The name of the cat is ${this.name}, and the age of cat is ${this.age} and the color is ${this.color}`
    )
  }
}
class Animal extends Cat {
  constructor(name, age, color, move) {
    super(name, age, color)
    this.move = move
  }
  moved() {
    console.log(`The cat moved to ${this.move}`)
  }
}
const newCat = new Animal("Meow", 28, "brown", "new Apartment")
console.log(newCat)
