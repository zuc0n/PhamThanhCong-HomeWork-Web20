const express = require('express');
const path = require('path')
const app = express();

// app.use(express.static('public'));
// app.get("/", function(req, res){
//     // console.log(__dirname);
//     // res.send("<h1>Hello World</h1>");
//     res.sendFile(path.resolve(__dirname,'../../Session1/index.html'));   
// });

// //param
// //http://localhost:6996/phamthanhcong    
// app.get('/:name', function(req,res){
//     console.log(req.params.name);
// });

//query
// http://localhost:6996/query?name=phamthanhcong&age=22&key=value
app.get('/query', function(req,res){
    console.log(req.query);
    res.send("<h1>" + req.query.name + "</h1>");
})

// app.get("/style.css", function(req, res){
//     res.sendFile(__dirname + '/Session2/btvn/style.css');
// })
app.listen(6996, function(error){
    if(error) console.log("404")
    else console.log("Server starts successfull");
});

//https://localhost:6996