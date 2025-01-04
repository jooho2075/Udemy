const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connection open");
    })
    .catch(err => {
        console.log("error");
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`;
});

// 407.Mongoose를 middleware로 정의하기
personSchema.pre('save', async function () {
    this.first = 'Yo ';
    this.last = 'Mama';
    console.log("About to Save");
})

personSchema.post('save', async function () {
    console.log("Just Saved");
})

const Person = mongoose.model('Person', personSchema);