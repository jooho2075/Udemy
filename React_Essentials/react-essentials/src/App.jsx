import './App.css'
// import reactImg from "./assets/react.svg"; // image loading 방법
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

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
