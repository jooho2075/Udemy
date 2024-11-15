// class249 - getElementsByTagName, className
const allImages = document.getElementsByTagName('img');

for(let img of allImages) {
    console.log(img.src);
}

const squareImages = docuement.getElementsByClassName('square');
for(let img of squareImages) {
    img.src = '';
}