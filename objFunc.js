const car = {
  color: "black",
  engine: "Turbo",
  power: function () {
    return console.log(this.engine)
  },
}
car.color = "green"
console.log(car.power())
const warehouse = function (pearsNum, applesNum) {
  return pearsNum + applesNum
}
// console.log("Accepted Pears and Apples Quantity is " + Warehouse(15, 35))

let savedTerminal = {
  name: "Baxtiyor",
}
function showGreetings(enterName) {
  if (enterName === savedTerminal.name) {
    console.log("Hello " + enterName)
  } else {
    console.log("There is no such name")
  }
}
// console.log(showGreetings("Bxa"))

function calcArg(arg1, arg2) {
  return typeof arg1 + typeof arg2
}
// console.log(calcArg(4, 5))
function findNumberPrime(num) {
  let isPrime = true
  if (num === 1) {
    console.log("Number is neither prime or composite")
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false
      } else {
        isPrime = true
      }
    }
    if (isPrime) {
      console.log("Number is Prime")
    } else {
      console.log("Number isnot a aprime")
    }
  }
}
// findNumberPrime(5)
