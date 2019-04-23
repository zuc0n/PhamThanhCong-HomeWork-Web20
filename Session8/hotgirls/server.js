const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

mongoose.connect(
    // 'mongodb://web20:cong123@ds161245.mlab.com:61245/web20'
    'mongodb://crispham:cong1234@ds233806.mlab.com:33806/hotgirl',
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

app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use(session({
    secret: 'fabweiufbdajfbweljfabrlejqrpiuhdaviuapdbcjnlajkariuddfh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7*24*60*60*100,
        
    }
}));

//Middleware    
app.use((req,res,next) => {
    // req.session.user = "aaaaaa";
    console.log("Session: ", req.session)
    console.log("SessionID: " + req.sessionID);
    next();
})

const apiRouter = require("./routers/apiRouters");

app.use("/api", apiRouter);

app.listen(6996, (err) =>{
    if(err) console.log(err)
    else console.log("Server start success");
})