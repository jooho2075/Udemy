
// TimerChallenge component 목적 : 다른 설정들로 재사용될 수 있게 하는 것
function TimerChallenge({title, targetTime}) { 
    return(
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    Start challenge(도전 시작 또는 끝내기와 같은 형식으로 쓰여 있어야 함)
                    나중에 useState로 관리할 부분
                </button>
            </p>
            <p className="active">
                Time is running : 타이머가 실행 중일 경우 보여줌
                Timer is inactive : 타이머가 실행 중이지 않을 경우 보여줌
            </p>
        </section>
    );
}

export default TimerChallenge;