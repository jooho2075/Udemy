// section210 - 함수의 기초
/*
function singSong() {
    console.log("Do");
    console.log("Re");
    console.log("Mi");
}
*/

// section211 - Argument
/*
function greet(firstName) {
    console.log(`firstName is : ${firstName}`);
}
*/

// sectioin212 - Multiple Arguments
/*
function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}!`);
}

function repeat(msg, num) {
    let result = '';
    for(let i = 0; i< num; i++) {
        result += msg;
    }
    console.log(result);
}
*/

// section213 - return(반환) 키워드
/*
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
*/

/*
    word.charAt(0).toUpperCase() : word의 첫글자를 대문자로 바꾼다는 의미
    word.slice(1) : 첫글자를 제외한 나머지 부분 출력
*/

// section215 - function scope(함수 범위)
/*
let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'great blue heron';
    console.log(bird);
}
birdWatch();
*/

// section216 - block scope(블록 범위)
/*
let radius = 8;
if(radius > 0) {
    const PI = 3.14159;
    let msg = 'HI!!';
}

console.log(radius);
console.log(PI);
*/

// section217 - lexical scope
/*
function bankRobbery() {
    const heroes = ['spiderman', 'wolverine', 'black panther', 'iron man'];
    function cryForHelp() {
        for(let hero of heroes) {
            console.log(`please help me, ${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}
*/

// section218 - function expression(함수 표현식)
/*
const add = function (x, y) {
    return x + y;
}
*/

// section219 - higher order function(고차함수)
/*
function callTwice(func) {
    func();
    func();
} 

function callTenTimes(f) {
    for(let i = 0; i< 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);
*/

// section220 - return function(반환 함수)
/*
function makeMysteryFunc() {
    const rand = Math.random()
    if(rand > 0.5) {
        return function() {
            console.log("Congratualation");
            console.log("you won the million dollars");
        }
    } else {
        return function() {
            alert("you've been infected");
            alert("stop trying to close the window");
            alert("stop trying to close the window");
            alert("stop trying to close the window");
            alert("stop trying to close the window");
        }
    }
}

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

function isBetween1(num) {
    return num >= 50 && num <= 100
}

function isBetween2(num) {
    return num >= 1 && num <= 10
}
*/

// section221 - Methods
/*
const myMath = {
    PI: 3.14,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}
*/

// shorthand 방법(속기법) -> 위와 같은 의미
/*
const myMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
*/

// section222 - 'this' 키워드
/*
const cat = {
    name: 'blue',
    color: 'grey',
    breed: 'scottish',
    meow() {
        console.log("This is : ", this);
        console.log(`${this.name} says meow`);
    }
}

const meow2 = cat.meow;
*/

// section223 - try/catch
/*
try {
    hello.toUpperCase();
} catch {
    console.log("error");
}

console.log("After");
*/

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log(e);
        console.log("please pass a string");
    }
}