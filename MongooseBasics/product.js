const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("error");
        console.log(err);
    });

    // Schema 정의하는 부분
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true // 반드시 필요하다는 의미
        },
        price: {
            type: Number,
            required: true
        }
    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product({ name: 'Mountain Bike', price: 599, color: 'red' });
    bike.save()
        .then(data => {
            console.log("It worked");
            console.log(data);
        })
        .catch(err => {
            console.log("Error");
            console.log(err);
        })