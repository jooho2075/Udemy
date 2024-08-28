//168_Javascript실행하기
/*
console.log("Hello from our first file");
let total = 1 + 3;
console.log("Goodbye");
*/

//169_if구문
//console.log("It's working");
/*
let random = Math.random();
if(random < 0.5) {
    console.log("your number is less than 0.5");
    console.log(random);
}

if(random >= 0.5) {
    console.log("your number is greater than 0.5");
    console.log(random);
}
*/

//170_elseif구문
/* 
const dayOfWeek = 'Friday';
if(dayOfWeek === 'Monday') {
    console.log("I hate Mondays")
} else if(dayOfWeek === 'Saturday') {
    console.log("I love Saturdays")
} else if(dayOfWeek === 'Friday') {
    console.log("I love Fridays")
} 
*/

/* 
const age = 8;
if(age < 5) {
    console.log("Free");
} else if(age < 10) {
    console.log("Child");
} else if(age < 65) {
    console.log("Adult");
} else if(age > 65) {
    console.log("Senior");
}
*/

//171_else구문
/* 
const dayOfWeek = prompt('Enter a Day').toLowerCase();
if(dayOfWeek === 'monday') {
    console.log("I hate Mondays");
} else if(dayOfWeek === 'saturday') {
    console.log("I love Saturdays");
} else if(dayOfWeek === 'friday') {
    console.log("I like Fridays");
} else {
    console.log("MEH")
}
*/

/* 
let random = Math.random();
if(random < 0.5) {
    console.log("your number is less than 0.5");
} else {
    console.log("your number is greater (or equal) than 0.5");
}
console.log(random);
*/

/* 
const age = 89;
if(age < 5) {
    console.log("Free");
} else if(age < 10) {
    console.log("Child");
} else if(age < 65) {
    console.log("Adult");
} else {
    console.log("you are a senior");
} 
*/

//172_Nesting
// password must be 6+ characters
// password cannot include space
/* 
const password = prompt("please enter a new password");
if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("valid password")
    } else {
        console.log("invalid password")
    }
} else {
    console.log("too short")
}
*/

//173_TruthY_FalseY
/* 
const userInput = prompt("Enter something");
if(userInput) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
*/

/* 
if(null) {
    console.log("Truthy")
} else {
    console.log("Falsy")
} */