const net = require('net')
const dateFormat = require('dateformat')

var port = process.argv[2]
var server = net.createServer(function(socket){
    var datetime = new Date();
    var str = dateFormat(datetime,"yyyy-mm-dd HH:MM");
    socket.end(str+"\n")

})
server.listen(port)
