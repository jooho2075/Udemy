function TabButton({ children, isSelected, ...props }) {
    console.log("TabButton Component Executing");
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
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