import './App.css'
// import reactImg from "./assets/react.svg"; // image loading 방법
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    let tabContent = 'Please click a button';

    const handleSelect = (selectedButton) => {
        // selectedButton => 'component', 'jsx', 'props', 'state' : selectedButton이라는 매개변수에서 받는 4개의 변수
        tabContent = selectedButton;
        console.log(tabContent);
    };

    console.log("App Component Executing");

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
                        {/* handleSelect를 실행하는 대신 이 화살표 함수를 onSelect에 실행하는 방식 */}
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>

                        {/* 위와 동일한 방법*/}
                        {/* <TabButton label='Components' /> */}
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App
