const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Mongo connection Open");
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