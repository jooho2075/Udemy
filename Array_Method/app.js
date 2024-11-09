// section226 - forEach Method
/*
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function print(element) {
    console.log(element);
}
numbers.forEach(print);

numbers.forEach(function(el) {
    if(el % 2 == 0) {
        console.log(el);    
    }
})
*/

// section227 - Map method
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubles = numbers.map(function(num) {
    return num * 2;
})
console.log(doubles);
*/

// section228 - Arrow function
/*
const add = function(x, y) {
    return x + y;
}

const add = (x, y) => {
    return x + y
}

const square = (num) => {
    return num * num;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}
*/

// section229 - 화살표 함수의 반환
// return이 없는 경우 결과는 undefined
/*
const rollDie1 = () => {
    Math.floor(Math.random() * 6) + 1;
}
*/

// implicit return(암시적 반환)인 경우 : 정상 작동
/*
const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)
*/

// 이렇게 생기 경우도 가능한 경우(한 줄일 때 편리함)
/*
const add = (a,b) => a + b
*/

// section230 - 화살표 함수의 요약
/*
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 98
    },
    {
        title: 'Parasite',
        score: 97
    },
    {
        title: 'Alien',
        score: 96
    },
];
*/

// mapping인 경우
/*
const newMovies = movies.map(function(movie) {
    return `${movie.title} - ${movie.score  / 10}`;
})
*/

// arrow function인 경우
/*
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))
*/

// 위의 함수를 한 줄로
/*
const newMovies = movies.map(movie => (`${movie.title} - ${movie.score / 10}`))
*/

// section231 - setTimeOut, setInterval
// setTimeOut
/*
console.log("hello")
setTimeout(() => {
    console.log("hi");
}, 3000)
console.log("....");
*/

// setInterval
/*
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

clearInterval(id);
*/

// section232 - Filter method
/*
const numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.filter(n => {
    return n < 10
})
*/

// section233 - some/every
/*
const exams = [80,98,92,78,77,90,89,84,81,77];

exams.every(score => score >= 75)
exams.some(score => score >= 75)
*/

// section234 - Reduce
/*
const prices = [9.99, 1.50, 19.99, 49.9,30.5];
*/

/*
let total = 0
for(let price of prices) {
    total += price;
}
console.log(total);
*/

/*
const total = prices.reduce((total, price) => {
    return total + price
})
*/

/*
const minPrice = prices.reduce((min, curr) => {
    if(curr < min) {
        return curr;
    }
    return min;
})
*/

/*
const evens = [2,4,6,8];
evens.reduce((sum, num) => sum + num, 100)
*/

// section235 - 화살표 함수와 this
const person = {
    firstName: 'park',
    lastName: 'jooho',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}