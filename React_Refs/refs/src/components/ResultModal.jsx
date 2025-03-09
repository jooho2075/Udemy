import {forwardRef} from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return(
        // <dialog> : 내장 스타일과 내장된 기능들 함께 제공
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime} second</strong>
            </p>
            <p>
                You stopped the timer <strong>with X seconds left</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;