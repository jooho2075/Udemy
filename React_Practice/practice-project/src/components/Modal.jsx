import { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from 'react-dom';

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialog = useRef();
    // useImperativeHandle hook에서 첫번째로 전달하는 값은 우리가 받는 ref
    // 두번째 값으로는 리액트가 나중에 호출하게 될 함수를 제공해야 함
    // 이 함수는 외부 컴포넌트에 노출하고자 하는 프로퍼티나 함수가 포함된 객체를 반환함
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal(); 
            }
        };
    });

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>{buttonCaption}</button> {/*dialog를 닫는 역할*/}
            </form>
        </dialog>, 
        document.getElementById('modal-root') // modal-root : index.html에서 가져온 것
    );
});

export default Modal;