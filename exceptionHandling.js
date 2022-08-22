function throwConsoleError() {
  try {
    console.log(a)
    let a = 3
  } catch (error) {
    console.log("'let must be declared' before use")
  }
}
throwConsoleError()

function throwMathError() {
  try {
    let a = 1 / 0
    let finite = Number.isFinite(a)
    if (finite === false) {
      throw new Error("Cannot be divide by zero")
    }
  } catch (error) {
    console.log(error.message)
  }
}
throwMathError()
