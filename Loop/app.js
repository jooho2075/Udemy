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

