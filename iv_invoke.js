const callfromvariables = require('./iv_variables')
const modules = require('./iv_functions')


modules(callfromvariables.paul)
modules(callfromvariables.simon)
modules('flora')


console.log(callfromvariables)
 
