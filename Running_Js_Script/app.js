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

//174_logicalOperators_And
/* 
const password = prompt("Enter your password");
if(password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("valid password")
} else {
    console.log("invalid password")
}
*/

//175_logicalOperators_Or
/* 
const age = -90;
if(age >= 0 && age < 5 || age >= 65) {
    console.log("free");
} else if(age >= 5 && age < 10) {
    console.log("$10");
} else if(age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("invalid age")
} 
*/

//176_logicalOperators_Not
/* 
const firstName = prompt("Enter your first name");
if(!firstName) {
    firstName = prompt("try again");
}
*/

/* 
const age = 45;
if(!(age >= 0 && age < 5 || age >= 65)) {
    console.log("not baby or senior");
} 
*/

//177_Switch
const day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("I don't know");
}