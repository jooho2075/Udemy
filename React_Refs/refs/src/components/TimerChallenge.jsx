import { useState } from "react";

// TimerChallenge component 목적 : 다른 설정들로 재사용될 수 있게 하는 것
function TimerChallenge({title, targetTime}) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {

    };

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}

export default TimerChallenge;