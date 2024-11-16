// class251 - innerHTML, textContent, innerText
/*
const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.innerText = 'I am a Link';
}
*/

// 코딩연습 53
/* 
const span = document.querySelector("span");
// document.querySelector 메서드로 "Delicious"가 포함된 텍스트 요소 선택
span.innerText = 'Disgusting';
// 변수에서 할당 연산자=과 함께 .innerText 속성을 사용해서 
// 요소의 텍스트를 "Disgusting"으로 변환
*/

// class252- 속성(Attribute)
// 코딩연습54
/*
const eggImg = document.querySelector('img');
// img요소 선택
eggImg.src = 'https://devsprouthosting.com/images/chicken.jpg';
// .src 속성을 사용하여 새 값 할당
eggImg.alt = 'chicken'; 
*/

// class253 - style 변경하기
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'cyan';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// 코딩연습56 - 무지개 연습
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

const spans = document.querySelectorAll('span');
for(let i = 0; i < spans.length; i++) {
    spans[i].style.color = colors[i];
}