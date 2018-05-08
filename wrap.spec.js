//const mocha = require('mocha')
const assert = require('chai').assert
const wrap = require('./wrap')

describe('wrap', function () {
  it('is a function', function () {
    assert.typeOf(wrap, 'function')
  })
})
