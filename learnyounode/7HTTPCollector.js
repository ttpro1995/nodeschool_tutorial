const http = require('http')
const url  = require('url')
const bl = require('bl')

link = url.parse(process.argv[2])

var options = {
    hostname: link.hostname,
    port: link.port
}



var req = http.get(options, (res)=>{
    res.setEncoding('utf8');
    res.pipe(bl(function(err,data){
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})
