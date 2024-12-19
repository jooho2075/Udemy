// 279.WebAPI와 단일 스레드
console.log("Sending request to server");
setTimeout(() => {
    console.log("here is your data from the server");
}, 3000)
console.log("I am at the end of the file");