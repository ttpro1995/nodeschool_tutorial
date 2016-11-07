const http = require('http')
const url  = require('url')
const bl = require('bl')

link1 = url.parse(process.argv[2])
link2 = url.parse(process.argv[3])
link3 = url.parse(process.argv[4])


var options1 = {
    hostname: link1.hostname,
    port: link1.port
}

var options2 = {
    hostname: link2.hostname,
    port: link2.port
}

var options3 = {
    hostname: link3.hostname,
    port: link3.port
}

var d1 = null;
var d2 = null;
var d3 = null;

var req1 = http.get(options1, (res)=>{
    res.setEncoding('utf8');
    res.pipe(bl(function(err,data){
        d1 = data.toString()
        if (d1!=null && d2!= null && d3!=null){
            console.log(d1);
            console.log(d2);
            console.log(d3);
        }
    }))
})

var req2 = http.get(options2, (res)=>{
    res.setEncoding('utf8');
    res.pipe(bl(function(err,data){
        d2 = data.toString();
        if (d1!=null && d2!= null && d3!=null){
            console.log(d1);
            console.log(d2);
            console.log(d3);
        }
    }))
})

var req3 = http.get(options3, (res)=>{
    res.setEncoding('utf8');
    res.pipe(bl(function(err,data){
        d3 = data.toString();
        if (d1!=null && d2!= null && d3!=null){
            console.log(d1);
            console.log(d2);
            console.log(d3);
        }
    }))
})
