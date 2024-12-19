const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;

let isGameOver = false;

p1Button.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        if(p1Score === winningScore) {
            isGameOver = true;
        }
        p1.textContent = p1Score;
    }   
})

p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
        }
        p2.textContent = p2Score;
    }
})