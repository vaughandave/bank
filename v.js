// Built In Modules

const os = require('os')

const objects = {

    hoome_dir : os.homedir(),
    info : os.userInfo(),
    name : os.type(),
    totalmem : os.totalmem(),
    freemem : os.freemem()



}
console.log(objects)