// Asynchronous version
/*
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if(err) throw err;
});
*/

// 결과 : 오류 발생
// fs : 자동으로 생기는 것이 아님

// 에러 메시지 내용
/*
fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
^

ReferenceError: fs is not defined
    at Object.<anonymous> (C:\Users\juho2\Udemy\Node\boilerplate.js:1:1)
    at Module._compile (node:internal/modules/cjs/loader:1566:14)
    at Object..js (node:internal/modules/cjs/loader:1718:10)
    at Module.load (node:internal/modules/cjs/loader:1305:32)
    at Function._load (node:internal/modules/cjs/loader:1119:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:220:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_ma
in:151:5)
    at node:internal/main/run_main_module:33:47

Node.js v23.4.0
*/

/*
const fs = require('fs');
console.log(fs);

// 결과 : 정상 작동
// fs객체에 많은 종류의 메서드들을 볼 수 있음

fs.mkdir('Dogs', { recursive: true }, (err) => {
    console.log("in the callback");
    if(err) throw err;
});
console.log("I come after mkdir in the file");

// 디렉토리 생성이 끝나고 나면(디렉토리가 생성 됐을 때) 콜백 실행됨
*/

// synchronous version
fs.mkdir('Cats');
console.log("I come after mkdir in the file");