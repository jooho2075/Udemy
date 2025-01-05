const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
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

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];


app.get('/products', async (req, res) => { // 라우트를 위한 비동기 콜백 패턴
    const products = await Product.find({});
    res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.post('/products', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save(); // 상품 저장 코드
    res.redirect(`/products/${newProduct._id}`); // DB에 완전 저장하도록 하는 코드
});

app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
}); // get 라우트

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async(req, res) => { // 상품 업데이트 로직
    const { id } = req.params;
    const product =  await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    // await 키워드를 사용하지 않으면 product._id에 접근이 불가능함
    res.redirect(`/products/${product._id}`); // Mongoose로부터 실제 정보를 받았을 때만 동작함
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});