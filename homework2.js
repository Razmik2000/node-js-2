// 2․ ՈՒնենք config.json ֆայլ ,
//     {
//         "host" : "localhost",
//         "port" : 3000
//     }
// պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
const http = require('http');
const server = http.createServer(function (req, res){
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.end('Listening');
});
server.listen(3000,"localhost");