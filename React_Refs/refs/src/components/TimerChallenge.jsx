import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

// TimerChallenge component 목적 : 다른 설정들로 재사용될 수 있게 하는 것
function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    /*
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);
    */

    /*
    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open(); // open() method : ResultModal.jsx에서 정의한 method
        }, targetTime * 1000);

        setTimerStarted(true);
    };
    */

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    };

    /*
    const handleStop = () => {
        clearTimeout(timer.current);
    };
    */

    const handleStop = () => {
        clearInterval(timer.current);
        dialog.current.open();
    };

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}

export default TimerChallenge;