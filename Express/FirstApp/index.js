const express = require("express"); // Express 불러오기
const app = express(); // Express 실행

app.use(() => { // app.use() 작동 방식 : 요청이 들어오면 콜백이 실행 됨
    console.log("we got a new request");
});

// app이 변수 이름일 경우 app.listen()을 입력 -> 요청받을 포트가 필요하기 때문
app.listen(3000, () => {
    console.log("listening on port 3000");
});
