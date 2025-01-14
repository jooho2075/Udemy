function handleClick() {
    console.log("Clicked the Button");
}

function handleHover() {
    console.log("Hover the Mosue");
}

function Clicker() {
    return(
        <div>
            <p>Click the Button</p>
            <button onClick={handleClick}>Click</button>
            <p onMouseOver={handleHover}>Hover Over Me</p>
        </div>
    );
}

export default Clicker;