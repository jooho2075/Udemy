// 279.WebAPI와 단일 스레드
/*
console.log("Sending request to server");
setTimeout(() => {
    console.log("here is your data from the server");
}, 3000)
console.log("I am at the end of the file");
*/

// 280.Callback
/*
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        document.body.style.backgroundColor = 'skyblue';
                        setTimeout(() => {
                            document.body.style.backgroundColor = 'purple';
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
*/

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}

delayedColorChange('olive', 3000, () => {
    console.log("Inside the callback");
});