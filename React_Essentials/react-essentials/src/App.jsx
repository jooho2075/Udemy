import './App.css'
import reactImg from "./assets/react.svg"; // image loading 방법
import { CORE_CONCEPTS } from './data.js';

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

// Prop(속성)으로 Component 재사용
function CoreConcept({image, title, description}) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept 
                            title={CORE_CONCEPTS[0].title} 
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}   
                        />
                        <CoreConcept {...CORE_CONCEPTS[1] }/> {/* 이 방법과 위의 방법 두 가지 방법이 있음, 결과는 동일함*/}
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App
