const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
// GitBash 결과 : { meat: 'pork', quantity: '1' }
app.use(express.json());
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'A',
        comment: 'aaaaa'
    },
    {
        username: 'B',
        comment: 'bbbbb'
    },
    {
        username: 'C',
        comment: 'ccccc'
    },
    {
        username: 'D',
        comment: 'ddddd'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.listen(3000, () => {
    console.log("on port 3000");
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    //console.log(req.body); // GitBash 결과 : undefined
    const { meat, quantity } = req.body;
    res.send(`Ok, here are your ${quantity} ${meat} tacos`);
});