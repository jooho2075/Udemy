import './App.css'
// import reactImg from "./assets/react.svg"; // image loading 방법
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    const handleSelect = () => {
        console.log("Hello World - selected");
    };

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
                <section id="examples">
                    <h1>Examples</h1>
                    <menu>
                        {/* Component 합성 */}
                        <TabButton onSelect={handleSelect}>Components</TabButton>
                        <TabButton onSelect={handleSelect}>JSX</TabButton>
                        <TabButton onSelect={handleSelect}>Props</TabButton>
                        <TabButton onSelect={handleSelect}>State</TabButton>

                        {/* 위와 동일한 방법*/}
                        {/* <TabButton label='Components' /> */}
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App
