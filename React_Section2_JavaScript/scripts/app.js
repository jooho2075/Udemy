// import { apiKey } from "./util";

// import apiKey from "./util.js"; // 위와 같은 의미

// console.log(apiKey);

// function
/*
function greet() {
    console.log("Hello!");
}

greet();
*/

// arrow function
/*
export default (userName, message) => {
    console.log("Hello");
    return userName + message;
}
*/

// Object
/*
const userName = "Max";
const userAge = 20;
*/

// 위와 같은 의미
/*
const user = {
    name: 'Max',
    age: 20
}

console.log(user);
console.log(user.name);
*/

// Array(배열)
/*
const hobbies = ["sport", "cooking", "reading"];
console.log(hobbies[0]);

hobbies.push("working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "sports");
console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);
*/

// Desctructuring
/*
const userNameData = ["Park", "JooHo"];

const firstName = userNameData[0];
const lastName = userNameData[1];
*/

// 위와 같은 의미
/*
const [firstName, lastName] = ["Park", "JooHo"];

console.log(firstName);
console.log(lastName);
*/

/*
const {name: userName, age} = {
    name: "Max",
    age: 34
};

console.log(userName);
console.log(age);
*/

// 스프레드 연산자(spread operation)
/*
const hobbies = ["sports", "cooking"];
const user = {
    name: "Max", 
    age: 34
};

const newHobbies = ["reading"];

const mergeHobbies = [...hobbies, newHobbies];
console.log(mergeHobbies);

const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);
*/

// 함수를 값으로 사용하기
/*
function handleTimeout() {
    console.log("Timed out");
}
const handleTimeout2 = () => {
    console.log("Timed out... again");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
*/

// 참조형과 기본값 비교
let userMessage = 'Hello'; // 기본형 값
const hobbies = ["sports", "cooking"];

hobbies.push("working");
console.log(hobbies);