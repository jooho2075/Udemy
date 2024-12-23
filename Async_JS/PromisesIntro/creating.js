// 284. 자신만의 Promises만들기
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { // 함수의 매개변수는 2개를 전달 해야함
        // 첫번째는 resolve할 매개변수, 두 번째는 reject할 매개변수
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('Your fake data is here');
            }
            reject('Request error');
        }, 1000)
    })
}

fakeRequest('/dog/1')
    .then(() => {
        console.log("Done with Request");
        console.log("Data is : ", data);
    })
    .catch((err) => {
        console.log("Oh no", err)
    })