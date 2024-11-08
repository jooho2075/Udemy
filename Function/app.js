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