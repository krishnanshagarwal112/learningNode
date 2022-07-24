const http = require("http")

const server = http.createServer((req, res)=>{
    console.log("CEHLSE");
    if(req.url == "/"){
        res.end("Home PAge")
    }
    if(req.url == "/about"){
        res.end("Our short history !")
        for(let i = 0; i < 2; i++){
            for(let j = 0; j < 2; j++){
                console.log(`${i}-${j}`);
            }
        }
    }

})

server.listen(5100,()=>{
    // console.log(server.address());
    console.log("Server is listening !");
}) 

