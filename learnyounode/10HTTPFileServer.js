const http = require('http');
const fs = require('fs');

var port = process.argv[2]
var location = process.argv[3]
var server = http.createServer((req,res)=>{
    var file_stream = fs.createReadStream(location);
    file_stream.pipe(res);
});

server.listen(port);
