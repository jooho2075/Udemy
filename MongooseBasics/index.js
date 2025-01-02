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

// 395. 첫번째 Mongoose 모델
const movieSchema = new mongoose.Schema({ // Schema정의는 DB에 영향을 주지 않음
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Movie라는 Model class 생성
const Movie = mongoose.model('Movie', movieSchema); // 첫 번째 인수는 단수형이면서 대문자로 작성
// const amadeus =  new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

// 396.대량 삽입하기
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand by Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
])
    .then(data => {
        console.log("It worked");
        console.log(data);
    })