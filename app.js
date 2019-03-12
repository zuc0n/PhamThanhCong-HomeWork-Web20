const fs = require('fs'); //gan thu vien vao 1 bien const

console.log("Begin");
// fs.writeFile("text.txt", "Hello World", function(error){
//     if(error) console.log(err)
//     else console.log("Success!!");
// }); //Bat dong bo 

// fs.writeFileSync("text.txt", "Hello World"); // dong bo

// const data = fs.readFile("text.txt",function(error, data){
//     if(error) console.log(err)
//     else console.log("File data: " + data);
// }); //bat dong bo

const data = fs.readFileSync("text.txt", "utf-8")
console.log(data)
console.log("End");