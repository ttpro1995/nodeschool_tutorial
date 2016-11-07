const http = require('http')
const port = process.argv[2]

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});

    req.on('data',(data)=>{
        var str = data.toString();
        var upper = str.toUpperCase();
        res.write(upper);
    })

    req.on('end',()=>{
        res.end();
    })


})

server.listen(port);
