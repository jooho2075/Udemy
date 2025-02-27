import { useState, useRef } from "react";

function Player() {
    const playerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState(null);
    // const [submitted, setSubmitted] = useState(false);
    
    /*
    const handleChange = (event) => {
        setSubmitted(false);
        setEnteredPlayerName(event.target.value);
    };
    */
   
    const handleClick = () => {
        setEnteredPlayerName(playerName.current.value); 
        // 실제 참조값(ref)만 가짐
        // current : input 요소를 값으로 보관하고 속성들에 접근할 수 있게됨
    };

    return(
        <section id="player">
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
            <p>
                <input 
                    ref={playerName} 
                    type="text"
                    /* 
                    onChange={handleChange} 
                    value={enteredPlayerName}
                    */
                />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}

export default Player;