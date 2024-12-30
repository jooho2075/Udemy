const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


// EJS의 사용을 알리는 부분(2개의 인수 사용 : view engine, ejf)
app.set('view engine', 'ejs');
// index.js파일이 있는 현재 디렉토리를 가져와 그곳에 도달하기 위한 전체 디렉토리에 /views를 붙여주는 역할
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    //res.send("Hi");
    res.render('home');
});

// 354.템플릿에 데이터 전달하기
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num }); // {rand: num}객체는 템플릿(random.ejs)으로 전달됨
}); // rand라는 변수에 접근이 가능함

// 355.subreddit template demo, 358.복잡한 subreddit demo 알아보기
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]; // data라는 전체 객체 생성
    if(data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
});


// 357.ESJ Loop
app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocket', 'monty', 'stephanie', 'winston'
    ];
    res.render('cats', { cats });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});