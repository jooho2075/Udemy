// 297. XHRs
const req = new XMLHttpRequest(); // empty request object

req.onload = function() { // 오류가 없을 때 실행됨
    console.log("It loaded");
    const data = JSON.parse(this.responseText);
    console.log(data);
};

req.onerror = function() { // 오류 발생 시 실행됨
    console.log("Error");
    console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1/"); // 첫 번째 메서드 : Get, 두 번째 메서드 : URL 
req.send();