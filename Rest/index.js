const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); // UUID
const methodOverride = require('method-override'); // method-override

app.use(express.urlencoded({ extended: true }));
// GitBash 결과 : { meat: 'pork', quantity: '1' }
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuid(),
        username: 'A',
        comment: 'aaaaa'
    },
    {
        id: uuid(),
        username: 'B',
        comment: 'bbbbb'
    },
    {
        id: uuid(),
        username: 'C',
        comment: 'ccccc'
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

// 374.Express 메서드 재정의
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment }); 
});

// 373.RESTful 주석 Update
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment; // URL에서 req.params인 ID를 가져온 후 req.body.comment에 담긴 payload를 가져옴
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
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