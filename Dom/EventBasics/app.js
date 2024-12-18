const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("You Clicked me");
    console.log("I hope it worked");
}

function scream() {
    console.log("AHHHHHH");
    console.log("Stop touching me");
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked h1');
}

 // 263.addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert("Clicked");
})

function twist() {
    console.log("Twist");
}

function shout() {
    console.log("shout");
}

const tasButton = document.querySelector("#tas");

/*
tasButton.onclick = twist;
tasButton.onclick = shout; // 결과 : shout만 나옴 -> 하나 이상은 나올 수 없음
*/

tasButton.addEventListener('click', twist, { once: true }); // 이 콜백은 해당 이벤트가 발생할 때 처음 한 번 실행됨
tasButton.addEventListener('click', shout);