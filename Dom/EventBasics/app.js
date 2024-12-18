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