const http = require('http')
const url  = require('url')

link = url.parse(process.argv[2])

var options = {
    hostname: link.hostname,
    port: link.port
}



var req = http.get(options, (res)=>{
    res.setEncoding('utf8');
    res.on('data', (chuck)=>{
        console.log(chuck);
    })
})
