//195_ForLoops
/* 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10) 
*/

/*
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

//196_ForLoop예제
/* 
for(let i = 0; i <= 20; i += 2) {
    console.log(i)
} 
*/

/* 
for(let i = 100; i >= 0; i--) {
    console.log(i);
} 
*/

//198_ArrayLoop
/* 
const animal = ['lion', 'tiger', 'bear'];

for(let i = 0; i < animal.length; i++) {
    console.log(i + " : " + animal[i]);
} 
*/

//199_NestedLoop
/* 
for(let i = 1; i <= 10; i++) {
    console.log(`i is : ${i}`);
    for(let j = 1; j <= 4; j++) {
        console.log(`   j is : ${j}`);
    }
} 
*/

/* 
const seatingChart = [
    ['kristen', 'erik', 'namita'],
    ['geoffrey', 'juanita', 'antonio', 'kevin'],
    ['yuma', 'sakura', 'jack', 'erika']
]

for(let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`row ${i + 1}`)
    for(let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
} 
*/

//200_WhileLoop
/* 
let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}
*/

/*
const secretCode = "babyhippo";

let guess = prompt("enter the secret code");
while(guess !== secretCode) {
    guess = prompt("enter the secret code again....");
}
*/

// 201_break
/*
let input = prompt("Hey, say something")
while(true) {
    input = prompt(input);
    if(input.toLowerCase() == "stop copying me") {
        break;
    }
}
*/

/*
for(let i = 0; i < 1000; i++) {
    console.log(i);
    if(i === 100) {
        break;
    }
}
console.log("Ok you win!!");
*/

// 202,203_guesing game(추측 게임 만들기)
let maximum = parseInt(prompt("Enter the maximum number"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess(Type 'q' to quit)");
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    if(guess === 'q') {
        break;
    }
    guess = parseInt(guess);
    if(guess > targetNum) {
        guess = prompt("Too high!");
        attempts++;
    } else if(guess < targetNum) {
        guess = prompt("Too low!");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if(guess === 'q') {
    console.log("Ok quitting!");
} else {
    console.log("Congratulation!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
