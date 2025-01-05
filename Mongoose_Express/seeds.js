// seeds.js -> product 모델을 요청하는 파일
// DB에서 새 데이터를 요청할 때마다 단독으로 실행되는 파일
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand') // 주소는 localhost 대신 127.0.0.1로 입력하기
    .then(() => {
        console.log("Mongo Connection Open");
    })
    .catch(err => {
        console.log("Oh.... Mongo Connection Error");
        console.log(err);
    })

/*
const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'fruit'
});
p.save()
    .then(p => {
        console.log(p);
    })
    .catch(e => {
        console.log(e);
    })
*/

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })