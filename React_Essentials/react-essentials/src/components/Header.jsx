import reactImg from "../assets/react.svg"; // image loading 방법

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// 동적값 출력 및 활용
function Header() {
    const description = reactDescription[getRandomInt(2)];

    return (
    <header>
        <img src={reactImg} alt="Stylized atom" /> {/* image loading 방법*/}
        <h1>React Essentials</h1>
        <p>
            {description} Reacct concepts you will need for almost any app you are
            going to build!
        </p>
    </header>
    );
}

export default Header;