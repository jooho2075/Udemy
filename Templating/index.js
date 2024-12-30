const express = require('express');
const app = express();
const path = require('path');

// EJS의 사용을 알리는 부분(2개의 인수 사용 : view engine, ejf)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
    //res.send("Hi");
    res.render('home.ejs');
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});