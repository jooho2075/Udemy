import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal(
    {targetTime, remainingTime}, 
    ref, onReset
) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingtime = (remainingTime / 1000).toFixed(2); // toFixed() : 소수점 몇 자리까지만 표시되도록 하는 method
    const score = Math.round((1 / remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return{
            open() { // 여기서는 method의 이름이 open인데 method name은 마음대로 지정할 수 있음
                dialog.current.showModal(); // showModal() method : dialog를 호출할 수 있음
            }
        }; 
    });
    // 첫번째 인수 - ref객체 : forwardRef함수에서 전달받은 객체
    // 두번째  인수 - 함수  
    
    return(
        // <dialog> : 내장 스타일과 내장된 기능들 함께 제공
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>
                The target time was <strong>{targetTime} second</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingtime} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;