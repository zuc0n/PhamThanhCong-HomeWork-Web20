const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    
    );
const apiRouter = require("./routers/apiRouters");
app.use("/api", apiRouter);

app.listen(6996, (err) =>{
    if(err) console.log(err)
    else console.log("Server start success");
})