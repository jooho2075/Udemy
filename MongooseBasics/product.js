// 400.Mongoose 스키마 유효성 검사
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
            required: true, // 반드시 필요하다는 의미
            maxlength: 20
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'Price must be positive']
        },
        // 401.추가 스키마 제약조건
        onSale: {
            type: Boolean,
            default: false // onSale을 따로 설정하지 않으면 false가 됨
        },
        // 문자열로만 이뤄진 배열이 되도록 만듦
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }

    });

    const Product = mongoose.model('Product', productSchema);

    const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' });
    bike.save()
        .then(data => {
            console.log("It worked");
            console.log(data);
        })
        .catch(err => {
            console.log("Error");
            console.log(err);
        })
    
    // 402.Mongoose 업데이트 유효성 검사하기
    /*
    Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -100 }, { new: true, runValidators: true })
    // new:true -> 새 데이터를 보여주게 함
        .then(data => {
            console.log("It worked");
            console.log(data);
        })
        .catch(err => {
            console.log("Oh... Error");
            console.log(err);
        })
    */

    