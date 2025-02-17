import './App.css'

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// 동적값 출력 및 활용
function Header() {
    const description = reactDescription[getRandomInt(2)];

    return (
    <header>
        <h1>React Essentials</h1>
        <p>
            {description} Reacct concepts you will need for almost any app you are
            going to build!
        </p>
    </header>
    );
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <h2>Time to get started</h2>
            </main>
        </div>
    );
}

export default App
