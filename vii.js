// Built In Modules
// The filesystem module
// part one sychrounous mode

const {readFileSync,writeFileSync} = require('fs')

const firstfile = readFileSync('./content/first.txt', 'utf8')
console.log(firstfile)

const secondfile = readFileSync('./content/second.txt','utf8')
console.log(secondfile)


writeFileSync('./content/third.txt','this is my third text')