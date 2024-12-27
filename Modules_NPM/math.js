/*
const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;
*/

//위와 같은 의미
module.exports.add = (x, y) => x + y;
module.exports.PI = 3.14159;
module.exports.sqaure = x => x * x;

/*
module.exports = "helloooo";
// 결과 : helloooo
// module.exports의 콘텐츠를 불러오라고 한 것
*/

/*
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
*/

// 위와 같은 결과가 나옴
/*
const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math;
*/