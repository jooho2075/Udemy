import { useState } from "react";

import { EXAMPLES } from "../data";

import TabButton from '../components/TabButton.jsx';
import Section from "./Section.jsx";

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    const handleSelect = (selectedButton) => {
        // selectedButton => 'component', 'jsx', 'props', 'state' : selectedButton이라는 매개변수에서 받는 4개의 변수
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    };

    return (
        <Section title="Examples" id="examples">
            <menu>
                {/* Component 합성 */}
                {/* handleSelect를 실행하는 대신 이 화살표 함수를 onSelect에 실행하는 방식 */}
                <TabButton 
                    isSelected={selectedTopic === 'components'} 
                    onClick={() => handleSelect('components')}>
                        Components
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'jsx'} 
                    onClick={() => handleSelect('jsx')}>
                        JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'} 
                    onClick={() => handleSelect('props')}>
                        Props
                </TabButton>
                <TabButton 
                    isSelected={selectedTopic === 'state'} 
                    onClick={() => handleSelect('state')}>
                        State
                </TabButton>

                {/* 위와 동일한 방법*/}
                {/* <TabButton label='Components' /> */}
            </menu>
            {/* 조건적 컨텐츠 렌더링 */}
            {!selectedTopic ? <p>Please select a topic</p> : null}

            {/* 위와 같은 의미(좀 더 코드가 간결해지고 이해하기 쉬워짐) */}
            {/* {!selectedTopic && <p>Please select a topic</p>} */}
            
            {selectedTopic ? (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>
            ) : null}
        </Section>
    );
}

export default Examples;