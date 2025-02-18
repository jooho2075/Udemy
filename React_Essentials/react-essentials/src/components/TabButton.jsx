function TabButton({children}) {
    return (
        <li>
            <button>{children}</button>
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