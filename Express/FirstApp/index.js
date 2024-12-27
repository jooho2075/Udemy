const express = require("express"); // Express 불러오기
const app = express(); // Express 실행

app.use((req, res) => { // app.use() 작동 방식 : 요청이 들어오면 콜백이 실행 됨
    // req : 들어오는 요청 의미하는 객체, res : 응답을 의미하는 객체
    // Express로 만들어져 이 callBack에 전달됨
    console.log("we got a new request");
    //res.send("hello we got your request");
    //res.send({ color: 'red' })
    res.send('<h1>This is my WebPage</h1>');
});

// app이 변수 이름일 경우 app.listen()을 입력 -> 요청받을 포트가 필요하기 때문
app.listen(8080, () => {
    console.log("listening on port 8080");
});
