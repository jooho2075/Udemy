import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    const dialog = useRef();
    
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