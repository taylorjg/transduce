const R = require('ramda')
const chai = require('chai')
const expect = chai.expect

describe('transduce', () => {

  describe('map and map', () => {

    const increment = x => x + 1
    const double = x => x * 2

    const functions = [
      R.map(increment),
      R.map(double)
    ]

    const pipedFunctions = R.pipe(...functions)
    const composedFunctions = R.compose(...functions)

    const xs = R.range(1, 6) // [1..6) i.e. [1..5]
    const INCREMENTS_THEN_DOUBLES_RESULT = [4, 6, 8, 10, 12]
    const DOUBLES_THEN_INCREMENTS_RESULT = [3, 5, 7, 9, 11]

    it('calling pipedFunctions directly increments then doubles', () => {
      const actual = pipedFunctions(xs)
      expect(actual).to.deep.equal(INCREMENTS_THEN_DOUBLES_RESULT)
    })

    it('calling composedFunctions directly doubles then increments', () => {
      const actual = composedFunctions(xs)
      expect(actual).to.deep.equal(DOUBLES_THEN_INCREMENTS_RESULT)
    })

    it('calling pipedFunctions via R.into doubles then increments', () => {
      const actual = R.into([], pipedFunctions, xs)
      expect(actual).to.deep.equal(DOUBLES_THEN_INCREMENTS_RESULT)
    })

    it('calling composedFunctions via R.into increments then doubles', () => {
      const actual = R.into([], composedFunctions, xs)
      expect(actual).to.deep.equal(INCREMENTS_THEN_DOUBLES_RESULT)
    })
  })

  describe('filter and take', () => {

    const isEven = x => x % 2 === 0

    const functions = [
      R.filter(isEven),
      R.take(5)
    ]
    const pipedFunctions = R.pipe(...functions)
    const composedFunctions = R.compose(...functions)

    const xs = R.range(1, 101) // [1..101) i.e. [1..100]
    const FILTERS_THEN_TAKES_RESULT = [2, 4, 6, 8, 10]
    const TAKES_THEN_FILTERS_RESULT = [2, 4]

    it('calling pipedFunctions directly filters then takes', () => {
      const actual = pipedFunctions(xs)
      expect(actual).to.deep.equal(FILTERS_THEN_TAKES_RESULT)
    })

    it('calling composedFunctions directly takes then filters', () => {
      const actual = composedFunctions(xs)
      expect(actual).to.deep.equal(TAKES_THEN_FILTERS_RESULT)
    })

    it('calling pipedFunctions via R.into takes then filters', () => {
      const actual = R.into([], pipedFunctions, xs)
      expect(actual).to.deep.equal(TAKES_THEN_FILTERS_RESULT)
    })

    it('calling composedFunctions via R.into filters then takes', () => {
      const actual = R.into([], composedFunctions, xs)
      expect(actual).to.deep.equal(FILTERS_THEN_TAKES_RESULT)
    })
  })
})
