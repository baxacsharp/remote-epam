//Ex1
const movieName = ["Harry Potter", "Collector", "Collected", "Paper building"]
movieName.forEach((name) => console.log(name))
//Ex2
const carManufacturer = ["Elon Musk", "Wolkswagen", "Wolvo", 5]
console.log(carManufacturer.map((man) => man.toString()))

//Ex3
const friends = ["Baxa", "Umid", "Shamshir", "Murod"]
friends.map((friend) => console.log("Hello " + friend))
//Ex4
const numeric = [1, 2, 3, 4, 5]
console.log(numeric.map((i) => Boolean(i)))
//Ex5
const desc = [1, 6, 7, 8, 3, 4, 5, 6]
console.log(desc.sort((a, b) => b - a))
//Ex6
const filterArray = [1, 6, 7, 8, 3, 4, 5, 6]
console.log(filterArray.filter((num) => num > 3))
//Ex7
let arrayNumber = [4, 5, 7, 8, 9]
function outputIndexArray(array, num) {
  return array.map((i) => (i = num))
}
console.log(outputIndexArray(arrayNumber, 5))
//Ex 8
for (let i = 0; i < 10; i++) {
  console.log("a")
}
//Ex 9
function isPrime(n) {
  if (n == 1 || n == 0) return false

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}
let n = 100
for (let i = 1; i <= n; i++) {
  if (isPrime(i)) {
    console.log(i)
  }
}
//Ex10
let oddNumbers = []
for (let i = 1; i < 100; i += 2) {
  oddNumbers.push(i)
}
console.log(oddNumbers)
