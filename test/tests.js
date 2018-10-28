const R = require('ramda')
const chai = require('chai')
const expect = chai.expect

describe('transduce', () => {

  describe('two simple functions', () => {

    const increment = x => x + 1
    const double = x => x * 2

    const functions = [
      R.map(increment),
      R.map(double)
    ]

    const pipedFunctions = R.pipe(...functions)
    const composedFunctions = R.compose(...functions)

    const xs = [1, 2, 3, 4, 5]

    it('calling pipedFunctions directly increments then doubles', () => {
      const actual = pipedFunctions(xs)
      expect(actual).to.deep.equal([4, 6, 8, 10, 12])
    })

    it('calling composedFunctions directly doubles then increments', () => {
      const actual = composedFunctions(xs)
      expect(actual).to.deep.equal([3, 5, 7, 9, 11])
    })

    it('calling pipedFunctions via R.into doubles then increments', () => {
      const actual = R.into([], pipedFunctions, xs)
      expect(actual).to.deep.equal([3, 5, 7, 9, 11])
    })

    it('calling composedFunctions via R.into increments then doubles', () => {
      const actual = R.into([], composedFunctions, xs)
      expect(actual).to.deep.equal([4, 6, 8, 10, 12])
    })
  })
})
