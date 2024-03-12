// const test= require('./test')
// console.log(test.name);
// console.log(test.age);

// const fs =require('fs')
// fs.writeFileSync("hello1.txt","Simple test file2");
// console.log("-->",__dirname)
// console.log("-->",__filename)
// const fs = require('fs').writeFileSync;
// fs("abc.txt", "abc file content");

const http= require('http');


http.createServer((req, res)=>{
    res.write("<h1>Checking first message in header</h1>");
res.end()
}).listen(4000);













