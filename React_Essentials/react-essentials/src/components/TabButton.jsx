function TabButton({children}) {
    const handleClick = () => {
        console.log("Hello world");
    }; 

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
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