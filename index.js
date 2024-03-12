const http = require('http')
http.createServer((req,res)=>{
res.writeHead(200,{'content-type': "application\json"})
res.write(JSON.stringify({
    name: "Sumit",
    email:"sumit@gmail.com"
}));
res.end()
}).listen(5000)