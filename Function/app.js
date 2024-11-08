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
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}