// class249 - getElementsByTagName, className
/*
const allImages = document.getElementsByTagName('img');

for(let img of allImages) {
    console.log(img.src);
}

const squareImages = docuement.getElementsByClassName('square');
for(let img of squareImages) {
    img.src = '';
}
*/

// class250 - querySelector/querySelectorAll
const links = document.querySelectorAll('p a');
for(let link of links) {
    console.log(link.href); // 모든 <a>tag 출처가 출력됨
}