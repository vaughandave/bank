// // Differences Between the two methods

// console.log('this is one')

// const {readFileSync,writeFileSync} = require('fs')

// console.log('this is two')


// const firstfile = readFileSync('./content/first.txt', 'utf8')
// // console.log(firstfile)
// const secondfile = readFileSync('./content/second.txt','utf8')
// // console.log(secondfile)

// writeFileSync('./content/third.txt','this is my third text')

// console.log('this is three')
















const {readFile,writeFile} = require('fs')

console.log('starting task')

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
   console.log('finished task')
 
})
}) 
}) 

console.log('starting next task')