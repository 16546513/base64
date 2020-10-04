const tables = require('./tables.js')

function btoa(str) {
  let res = ''
  let i
  for (i = 0; i + 2 < str.length; i += 3) {
    let bits = toB(str[i]) + toB(str[i + 1]) + toB(str[i + 2])
    for (let j = 0; j < bits.length; j += 6) {
      res += toA('00' + bits.slice(j, j + 6))
    }
  }
  if (i + 1 == str.length) {
    let bits = toB(str[i])
    res += toA('00' + bits.slice(0, 6))
    res += toA('00' + bits.slice(6) + '0000')
    res += '=='
  } else if (i + 2 == str.length) {
    let bits = toB(str[i]) + toB(str[i + 1])
    res += toA('00' + bits.slice(0, 6))
    res += toA('00' + bits.slice(6, 12))
    res += toA('00' + bits.slice(12) + '00')
    res += '='
  }
  return res
}

function toB(c) {
  return c.charCodeAt().toString(2).padStart(8, 0)
}

function toA(b) {
  return tables[parseInt(b, 2)]
}

module.exports = btoa
