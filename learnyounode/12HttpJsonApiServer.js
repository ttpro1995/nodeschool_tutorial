const http = require('http');
const url = require('url');

const port = process.argv[2];

var server = http.createServer((req,res)=>{
    if (req.method === 'GET'){
        var urlReq = url.parse(req.url, true);
        var iso = urlReq.query.iso;
        var datetime = new Date(iso);
        if (urlReq.pathname ==='/api/unixtime'){
            var result = {
                unixtime: Date.parse(iso)
            }
            res.writeHead('200',{'Content-Type':'application/json'});
            res.write(JSON.stringify(result));
            res.end();
        }
        else if (urlReq.pathname === '/api/parsetime'){
            var result = {
                hour: datetime.getHours(),
                minute: datetime.getMinutes(),
                second: datetime.getSeconds(),
            }
            res.writeHead('200',{'Content-Type':'application/json'});
            res.write(JSON.stringify(result));
            res.end();

        } else{
            res.writeHead('400');
            res.end();
        }
    }else{
        res.writeHead('405');
    }
});

server.listen(port);
