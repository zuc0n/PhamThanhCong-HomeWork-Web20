const express = require('express');
const app = express();


app.get("/", function(req,res){
    res.sendFile(__dirname + '/views/games.html');
});


app.listen(8080, function(err){
    if(err) console.log('error')
    else console.log('Server start success!!!');
});