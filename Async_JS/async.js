// 285. 비동기 키워드
/*
async function hello() {
}
*/

/*
const sing = async () => {
    throw "Oh no, problem....";
    //throw new Error("Uh oh....");
    return 'LA LA LA'; // return은 실행되지 않음
}
*/

/*
sing()
    .then((data) => {
        console.log("Promise resolved with : ", data);
    })
    .catch(err => {
        console.log("Oh no, promise rejected");
        console.log(err);
    })
*/

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'welcome'
    throw 'Invalid Pasword'
}

//login('park', 'jooho') // 결과 : Error
login('park', 'corgifeetarecute') // 결과 : Logged in Welcome
    .then(msg => {
        console.log("Logged in");
        console.log(msg);
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })