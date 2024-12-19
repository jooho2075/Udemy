const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

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
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1.textContent = p1Score;
    }   
})

p2Button.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
            p1.classList.add('has-text-danger');
            p2.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2.textContent = p2Score;
    }
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('has-text-success', 'has-text-danger');
    p2.classList.remove('has-text-danger', 'has-text-success');
    p1Button.disabled = false;
    p2Button.disabled = false;
}