function wrap(str, num) {
  if (str.length && num > 0) {
    let result = ''
    let z = 0
    for (let i = 0; i < str.length; i++) {
      if(i % num === 0) {
        result += str.slice(z, i) + '\n'
        z = i
      }
    }
    return result
  } else return str
}

module.exports = wrap
