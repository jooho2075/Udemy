function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

//위와 동일한 방법
/*
function TabButton({label}) {
    return (
        <li>
            <button>{label}</button>
        </li>
    );
}
*/
export default TabButton;