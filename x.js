// Built In Modules
// The Http module

 const http = require('http')


 const server = http.createServer( function(req,res){

        if( req.url === '/'){

            res.end('welcome to our home page')
        }
        if( req.url === '/about'){

            res.end('welcome to our home page')
        }

        else{
            res.end('we cant seem to to find the page you are looking')
        }


 })

server.listen(3000)