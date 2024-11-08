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