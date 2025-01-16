import { useState } from "react";

function Counter() {
    console.log("Re-Rendered");
    
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    };
    const setToTen = () => {
        setCount(10);
    }
    const addThree = () => {
        // 아래 callBack 문법을 사용하면
        // 이전 또는 현재 값에 의존하는 상태를 업데이트할 수 있음
        setCount((currentCount) => currentCount + 1); // React가 자동으로 현재 상태 값을 이 매개 변수로 전달함
        console.log(count);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    };
    return (
        <div>
            <p>Count : { count }</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set to Ten</button>
        </div>
    );
}

export default Counter;