const { atob, btoa } = require('./index.js')
const assert = require('assert')

assert(atob(btoa('abc')) === 'abc', "atob(btoa('abc')) === 'abc'")
assert(atob(btoa('A')) === 'A', "atob(btoa('A')) === 'A'")
assert(atob(btoa('ac')) !== 'abc', "atob(btoa('ac')) !== 'abc'")
assert(atob(btoa('+/')) === '+/', "atob(btoa('+/')) === '+/'")

console.log('全部测试通过')
