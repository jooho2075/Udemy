import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

// TimerChallenge component 목적 : 다른 설정들로 재사용될 수 있게 하는 것
function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal(); // showModal() method : dialog를 호출할 수 있음
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        clearTimeout(timer.current);
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
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}

export default TimerChallenge;