import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(function myEffect() {
        console.log("My effect is called");
    },[]
    // [count] // [count] state가 변할 때만 myEffect를 실행하도록 React에게 알리는 부분
    );

    const increment = () => {
        setCount((c) => c + 1);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button><br />
            <p>Name : {name}</p>
            <input value={name} onChange={handleChange} type="text" />
        </div>
    )
}

export default Counter;