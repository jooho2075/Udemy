const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
// GitBash 결과 : { meat: 'pork', quantity: '1' }
app.use(express.json());

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