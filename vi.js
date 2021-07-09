// Built In Modules

const path = require('path')


console.log(path.sep)


const join = path.join('./content/subfolder/text.txt')
console.log(join)

const base = path.basename(join)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder','text.txt')
console.log(absolute)

