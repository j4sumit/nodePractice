// console.log(process.argv) /*[
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\j4sum\\OneDrive\\Desktop\\nodePractice\\index.js',
//     'hello',
//     'hi'
//   ]*/
// console.log(process.argv[0]) //C:\Program Files\nodejs\node.exe
// console.log(process.argv[1]) //C:\Users\j4sum\OneDrive\Desktop\nodePractice\index.js
// console.log("node index.js hello hi") //node index.js hello hi

// const fs = require('fs')
// const input = process.argv;
// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid content");
// }

const fs = require('fs');
const path= require('path');
const dirPath = path.join(__dirname,"files");
// for(i=0; i<8; i++){
//     // fs.writeFileSync(dirPath+"/hello"+i+".txt","A simple text file");
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"A simple text file");
// }

fs.readdir(dirPath,(err,files)=>{
files.forEach((item)=>{
    console.log("files name is",item)
})
})