//Ex1
const str = "ahb acb aeb aeeb adcb axeb"
let result = str.match(/a.b/g)
console.log(result)
//Ex2
const numberStr = "2 + 3 223 2223"
let position = numberStr.search(/2\s\+\s3/)
console.log(position)
//Ex3
let getDate = new Date()
console.log(getDate.getDay())
console.log(getDate.getMonth())
console.log(getDate.getFullYear())
