// 297. XHRs
/*
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
*/

// 298.Using the Fetch API
fetch("https://swapi.dev/api/people/1/") // 함수 호출(fetch함수가 promise 반환)
    .then(res => {
        console.log("resolved", res);
        return res.json() // res객체를 가져오는 fetch 함수에 추가된 메서드
        // res 응답 객체에 대해 res.json을 호출
    })
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log("error", e);
    })
