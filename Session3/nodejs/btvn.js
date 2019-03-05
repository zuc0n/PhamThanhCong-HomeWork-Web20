const express = require('express');
const app = express();
const fs = require('fs');

app.listen(2000, function(error){
    if(error) console.log("404")
    else console.log("Server starts successfull");
});

app.get('/', function(req,res){
    res.sendFile(__dirname + "/btvn.html");
});

app.get('/class', function(req,res){
    let className= req.params.class;
    let url = '/btvn/data/'+'className'+'.json';
    let data= fs.readFileSync(path.resolve(__dirname, url));
    let listData = JSON.parse(data);
    res.send(printHtml(listData));
});

function printHtml(data){
    let printOut = "<ul>";
    for(i = 0; i< data.length; i++){
        printOut += "<li>"+ data[i] + "</li>";
    }
    printOut += "</ul>";
    return printOut;
}

//https://localhost:2000