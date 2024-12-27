const express = require("express"); // Express 불러오기
const app = express(); // Express 실행

/*
app.use((req, res) => { // app.use() 작동 방식 : 요청이 들어오면 콜백이 실행 됨
    // req : 들어오는 요청 의미하는 객체, res : 응답을 의미하는 객체
    // Express로 만들어져 이 callBack에 전달됨
    console.log("we got a new request");
    res.send('<h1>This is my WebPage</h1>');

    //res.send("hello we got your request");
    //res.send({ color: 'red' })
});
*/

app.get('/', (req, res) => { // 루트 라우트
    res.send('this is the home page');
});

app.get('/r/:subreddit', (req, res) => { // 패턴 정의
    // console.log(req.params);
    //res.send("this is a subreddit");
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});

app.post('/cats', (req, res) => {
    res.send('post request to /cats');
});

app.get('/cats', (req, res) => {
    //console.log("cat request");
    res.send('Meow');
});

app.get('/dogs', (req, res) => {
    //console.log("dog request");
    res.send('Woof');
});

// 제네릭 코드 : 항상 마지막에 와야함
// 그렇지 않으면 제네릭 코드 아래 코드들이 전부 무시됨
app.get('*', (req, res) => {
    res.send(`I don't know that path`);
});

// app이 변수 이름일 경우 app.listen()을 입력 -> 요청받을 포트가 필요하기 때문
app.listen(8080, () => {
    console.log("listening on port 8080");
});
