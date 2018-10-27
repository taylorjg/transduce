
const R = require('ramda')

const inc = x => x + 1
const triple = x => x * 3
const square = x => x * x
const isOdd = x => x % 2 === 1
const stringify = x => x.toString()

const xs = R.range(0, 1000 * 1000 * 10)

// https://github.com/ramda/ramda/issues/2123
const functions = [
  R.map(inc), // 1
  R.map(triple), // 2
  R.filter(isOdd), // 3
  R.map(square), // 4
  R.map(stringify), // 5
  R.take(10) // 6
]
const xf1 = R.pipe(...functions)
const xf2 = R.compose(...functions)

const showResults = (label, f) =>
  console.log(`${label}: ${JSON.stringify(f(xs))}`)

showResults('R.into', R.into([], xf2))
showResults('direct', xf1)
