const express = require('express');
const app = express();
const path = require('path');

// EJS의 사용을 알리는 부분(2개의 인수 사용 : view engine, ejf)
app.set('view engine', 'ejs');
// index.js파일이 있는 현재 디렉토리를 가져와 그곳에 도달하기 위한 전체 디렉토리에 /views를 붙여주는 역할
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
    //res.send("Hi");
    res.render('home.ejs');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});