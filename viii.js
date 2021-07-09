// Built In Modules
// The filesystem module
// part two asynchronous mode

const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',function(err,result){

    if(err){

            console.log(err.message)
    }
   else{
       const first = result
   }
   const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',function(err,result){

    if(err){

            console.log(err.message)
    }
   else{
       const second = result
   }

writeFile('content/fourth.txt','this is a fourth text',function(){
    if(err){
            console.log(err.message)
    }
   else{
       const second = result
   }
})
}) 
}) 