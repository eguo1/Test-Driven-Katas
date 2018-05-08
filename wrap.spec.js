//const mocha = require('mocha')
const should = require('chai').should()
const expect = require('chai').expect
const wrap = require('./wrap.js')

describe('wrap', function () {
  const string = 'this is a test string'
  const number = 10
  // beforeEach(function() {
  //   const string = 'this is a test string'
  // })
  it('is a function', function () {
    (typeof(wrap)).should.equals('function')
  })
  it('should return a string', function () {
    expect(wrap(string)).to.be.a('string')
  })
  it('should return a string with new line characters when passed a number smaller than the length of the string', function () {
    expect(wrap(string, number).indexOf('\n')).to.be.greaterThan(-1)
  })
})
