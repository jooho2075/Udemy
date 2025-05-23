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
/*
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
*/

// 299. Introducing Axios
/*
axios.get("https://swapi.dev/api/people/1/") // fetch처럼 promise 반환
    .then(res => {
        console.log("response : ", res);
    })
    .catch(e => {
        console.log("error", e);
    });
*/

// 300.Axios로 Header 세팅하기
/*
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: {Accept: 'application/json'} } // Header 지정
        const res = await axios.get('https://icanhazdadjoke.com/', config)
    
        return res.data.joke;
    } catch(e) {
        return "no jokes avaliable";
    }
}

button.addEventListener('click', addNewJoke);
*/

// 301. Tv 프로그램 검색 앱
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)

    form.elements.query.value = ''; 
})

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}