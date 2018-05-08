function wrap(str, num) {
  if (str.length && num > 0) return str.slice(0, num) + '\n' + str.slice(num)
  else return str
}

module.exports = wrap
