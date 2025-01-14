/*
function handleClick() {
    console.log("Clicked the Button");
}

function handleHover() {
    console.log("Hover the Mosue");
}
*/

// 634.Clicker 예제

function Clicker({ clickMessage, nonClickMessage, clickText, nonClickText }) {
    return(
        <div>
            {/* 
            <p>Click the Button</p>
            <button onClick={handleClick}>Click</button>
            <p onMouseOver={handleHover}>Hover Over Me</p> 
            */}

            {/* 634.Clicker 예제 */}
            <button onClick={() => alert(clickMessage)}>{clickText}</button>
            <button onClick={() => alert(nonClickMessage)}>{nonClickText}</button>
        </div>
    );
}

export default Clicker;