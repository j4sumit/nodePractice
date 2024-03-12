const data= require('./data')
const http = require('http')
http.createServer((req,res)=>{
res.writeHead(205,{'content-type': "application\json"})
// res.write(JSON.stringify({
//     name: "Sumit",
//     email:"sumit@gmail.com"
// }));
res.write(JSON.stringify(data));
res.end()
}).listen(5000)