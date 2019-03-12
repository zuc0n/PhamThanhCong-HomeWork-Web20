const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));

app.get("/ask", (req, res) => {
 res.sendFile(__dirname + '/views/ask.html');   
});

// app.post("/", (req, res) => {
//     console.log("POST")
// });

// app.put("/", (req, res) => {
//     console.log("PUT")
// });

// app.delete("/", (req, res) => {
//     console.log("DEL")
// });

app.post("/addquestion", (req, res) =>{
    const question = req.body.question;
    const questionList = JSON.parse(fs.readFileSync("./views/question.json", 'utf-8'));
    questionList.push(question);
    fs.writeFileSync("./views/question.json", JSON.stringify(questionList));
    res.redirect("/ask");    
});

app.get("/answers", (req,res) => {
    const data = fs.readFileSync("./views/question.json", 'utf-8');
    const questions = JSON.parse(data);
    const display = questions[Math.floor(Math.random() * questions.length)];
    res.send(
        "<nav><a href='/ask'>Quick Ask</a> <a href = '/answer'>Quick Answer</a></nav><h1>"+display+"</h1><button>Sai/Không/Trái</button> <button>Đúng/Có/Phải</button><br><button>Kết quả vote</button> <button>Câu hỏi khác</button>"
    );
})



app.listen(6996, (err) => {
    if (err) console.log(err)
    else console.log("Server start!!");
});



