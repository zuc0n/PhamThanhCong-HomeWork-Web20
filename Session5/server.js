const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const QuestionModel = require('./models/question');

mongoose.connect(
    'mongodb://web20:cong123@ds161245.mlab.com:61245/web20',
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

app.use(bodyParser.urlencoded({extended: false}));

app.get("/ask", (req, res) => {
 res.sendFile(__dirname + '/views/ask.html');   
});

app.put('/editquestion',(req,res) =>{
    const questionList = JSON.parse(fs.readFileSync("./views/question.json", 'utf-8'));
    const question = req.body;
    questionList[question.id] = question;
    fs.writeFileSync("./views/question.json", JSON.stringify(questionList));
});

app.post("/addquestion", (req,res) =>{
    // const questionList = JSON.parse(fs.readFileSync("./views/question.json", 'utf-8'));
    // const question = {
    //     content: req.body.question,
    //     yes: 0,
    //     no: 0,
    //     id: questionList.length,
    // };
    // questionList.push(question);
    // fs.writeFileSync("./views/question.json", JSON.stringify(questionList));
    
    // const questionList = new QuestionModel({
    //     content: req.body.question,
    //     Yes: 0,
    //     No: 0,  
        
    // });
    // console.log('questionList')
    // questionList.save();
    QuestionModel.create({
        content: req.body.question,
        Yes: 0,
        No: 0,
    }), (err, questionCreated) => {
        if(err) console.log(err)
        else console.log(questionCreated);
    };

    res.redirect("/ask");    
});

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get("/randomQuestion", (req,res) => {
    // const questions = JSON.parse(fs.readFileSync("./views/question.json", 'utf-8'));
    // const display = questions[Math.floor(Math.random() * questions.length)];
    // res.send(display);

    QuestionModel.find({}, (err, questionList) =>{
        if(err) console.log(err)
        else res.send(questionList[Math.floor(Math.random() * questionList.length)]);
    })
})


app.get("/vote/:questionId/yes", (req, res) => {
    // const questionList = JSON.parse(fs.readFileSync("./views/question.json","utf-8"));
    // questionList[questionId].yes = Number(questionList[questionId].yes) + 1;
    // fs.writeFileSync("./question.json", JSON.stringify(questionList));

    const questionId = req.params.questionId;
    QuestionModel.findById({questionId}, (err,data) =>{
        if(data){
            data.yes +=1;
            data.save((err,docs) =>{
                if(err) console.log(err)
                else console.log(docs);
                res.redirect(`/question/${questionId}`);
            });
        };
    });
});

app.get("/vote/:questionId/no", (req, res) => {
    // const questionList = JSON.parse(fs.readFileSync("./views/question.json","utf-8"));
    
    // questionList[questionId].no = Number(questionList[questionId].no) + 1;
    // fs.writeFileSync("./question.json", JSON.stringify(questionList));


    
    const questionId = req.params.questionId;
    QuestionModel.findById({questionId}, (err,data) => {
        if(data){
            data.no +=1;
            data.save((err,docs) =>{
                if(err) console.log(err)
                else console.log(docs);
                res.redirect(`/question/${questionId}`);
            });
        };
    });
});

app.get("/question/:questionId", (req,res) => {
    res.sendFile(__dirname + "/views/questionInfo.html");
});

app.get("/detail/:questionId", (req,res) => {
    // const questionList = JSON.parse(fs.readFileSync("./views/question.json","utf-8"));
    // const question = questionList[questionId];
    // res.send(question);
    const questionId = req.params.questionId;
    QuestionModel.findById({questionId}, (err, data) =>{
        if(err) console.log(err)
        else res.send(data);
    });
});

app.listen(6996, (err) => {
    if (err) console.log(err)
    else console.log("Server start!!");
});



