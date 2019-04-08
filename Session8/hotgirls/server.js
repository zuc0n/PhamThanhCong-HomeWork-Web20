const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(
    // 'mongodb://web20:cong123@ds161245.mlab.com:61245/web20'
    'mongodb://hotgirl:cong1234@ds233806.mlab.com:33806/hotgirl',
    { userNewUrlParser: true},
    (err) => {
        if(err) console.log(err)
        else console.log("Connect to DB success");
        // QuestionModel.find({ }, (err, docs) => {
        //     if(err) console.log(err)
        //     else console.log(docs);
        // });
    }
);
const apiRouter = require("./routers/apiRouters");
app.use("/api", apiRouter);

app.listen(6996, (err) =>{
    if(err) console.log(err)
    else console.log("Server start success");
})