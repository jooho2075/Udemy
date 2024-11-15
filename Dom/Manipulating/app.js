// class251 - innerHTML, textContent, innerText
/*
const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.innerText = 'I am a Link';
}
*/

// 코딩연습 53 
const span = document.querySelector("span");
// document.querySelector 메서드로 "Delicious"가 포함된 텍스트 요소 선택
span.innerText = 'Disgusting';
// 변수에서 할당 연산자=과 함께 .innerText 속성을 사용해서 
// 요소의 텍스트를 "Disgusting"으로 변환