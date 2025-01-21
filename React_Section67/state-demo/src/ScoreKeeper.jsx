import { useState } from "react";

export default function ScoreKeeper({numPlayers=3, target=5}) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    /*
    function increaseP1Score() {
        setScores((oldScores) => {
            return {...oldScores, p1Score: oldScores.p1Score + 1 }
        });
    };
    */

    /*
    function increaseP2Score() {
        setScores((oldScores) => {
            return {...oldScores, p2Score: oldScores.p2Score + 1 }
        });
    };
    */
    
    /*
    const incrementScore = (idx) => {
        setScores(prevScores => {
            const copy = [...prevScores];
            copy[idx] += 1;
            return copy;
        })
    }
    */

    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if(i === idx) {
                    return score + 1;
                } else {
                    return score;
                }
            });
        });
    };

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}>
                            Player{idx + 1} : {score}
                            <button onClick={() => incrementScore(idx)}>+1</button>
                            {score >= target && "Winner"};
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
            {/* 
            <p>Player1 : {scores.p1Score}</p>
            <p>Player2 : {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player1</button>
            <button onClick={increaseP2Score}>+1 Player2</button> 
            */}
        </div>
    );
}