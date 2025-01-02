const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("error");
        console.log(err);
    });

// 위와 같은 의미
/*
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // error가 있을 경우 console에서 프린트해 줌
db.once('open', function() { // connection에 성공한 경우
    console.log("connection open");
});
*/