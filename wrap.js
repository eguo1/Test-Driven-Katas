function wrap(str, num) {
  return str.slice(0, num) + '\n' + str.slice(num)
}

module.exports = wrap
