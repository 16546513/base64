const tables = require('./tables.js')

function atob(str) {
  let res = ''
  let tmp = ''
  for (let i = 0; i < str.length && str[i] != '='; i++) {
    let bits = tables.indexOf(str[i]).toString(2).padStart(8, 0)
    for (let j = 2; j < bits.length; j++) {
      tmp += bits[j]
      if (tmp.length == 8) {
        res += String.fromCharCode(parseInt(tmp, 2))
        tmp = ''
      }
    }
  }
  return res
}

module.exports = atob
