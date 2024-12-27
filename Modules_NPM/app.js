const math = require ('./math');

// const { PI, square } = require('./math'); // PI랑 square만 가져오도록 구조 분해한 것

console.log(math); // 결과 : 빈 객체
console.log(math.add(1,2));
console.log(math.PI);
console.log(math.square(9));