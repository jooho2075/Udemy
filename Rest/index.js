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
        id: 1,
        username: 'A',
        comment: 'aaaaa'
    },
    {
        id: 2,
        username: 'B',
        comment: 'bbbbb'
    },
    {
        id: 3,
        username: 'C',
        comment: 'ccccc'
    },
    {
        id: 4,
        username: 'D',
        comment: 'ddddd'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

// Form을 보여주는 Get 라우트
// 처리되는 다른 라우트 쪽으로 Post 요청으로 보내고
app.get('/comments/new', (req, res) => { // form을 렌더링하는 /new 템플릿
    //res.render('comments/new');
    res.redirect('/comments/new');
});

// /comments의 Post라우트 -> 위의 form이 data를 제출하는 장소
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', { comment });
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