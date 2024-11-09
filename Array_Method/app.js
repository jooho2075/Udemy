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

