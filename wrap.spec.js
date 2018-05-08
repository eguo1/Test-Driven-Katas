//const mocha = require('mocha')
const should = require('chai').should()
const expect = require('chai').expect
const wrap = require('./wrap.js')

describe('wrap', function () {
  const string = 'this is a test string'
  const array = string.split(' ')
  const number = 10
  // beforeEach(function() {
  //   const string = 'this is a test string'
  // })
  it('is a function', function () {
    (typeof (wrap)).should.equals('function')
  })
  it('should return a string', function () {
    expect(wrap(string)).to.be.a('string')
  })
  it('should return a string with new line characters when passed a number smaller than the length of the string', function () {
    expect(wrap(string, number).indexOf('\n')).to.be.greaterThan(-1)
  })
  it('should handle an empty string passed as a parameter', function () {
    expect(wrap('', number)).to.be.empty
  })
  it('should handle a number parameter of 0', function () {
    expect(wrap(string, 0).indexOf('\n')).to.be.equal(-1)
  })
  it('can wrap multiple lines of text', function () {
    expect(wrap(string, 4).indexOf('\n')).to.not.equal(wrap(string, 4).lastIndexOf('\n'))
  })
  it('does not wrap on full words', function () {
    expect(wrap(string, 4).split('/\s/').length).to.equal(array.length)
  })
})
