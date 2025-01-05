const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product'); // 연결을 위한 모델 요청

mongoose.connect('mongodb://127.0.0.1:27017/farmStand') // 주소는 localhost 대신 127.0.0.1로 입력하기
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Oh... Mongo Connection Error");
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send("Woof");
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});