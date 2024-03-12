const fs = require('fs');
const path=require('path');
const dirPath= path.join(__dirname,"crud");
const filePath=`${dirPath}/apple.txt`

//Create file
// fs.writeFileSync(filePath,"this is simple text file");

//Read file
// fs.readFile(filePath,'utf-8',(error, item)=>{
// console.log(item);
// })

//Update file
// fs.appendFile(filePath,"and file name is apple.txt",(err)=>{
//     if(!err) console.log("file is updated")
// })

//Rename
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// })

//Delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)
