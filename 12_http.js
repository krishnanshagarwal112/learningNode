const http = require('http');

const server = http.createServer((req, res)=>{          // req means request | // res means response
    if(req.url === "/"){
        res.end("WELCOME TO OUR HOME PAGE")
        console.log(req);
        
    }
    if(req.url === "/about"){
        res.end("Here is our short history")
    }
    res.end(
    `
    <h1>Oops!</h1>
    <p>Can't seem to find the link</p>
    <a href="/">back home </a>
    `    
    )
    

})

server.listen(5500)