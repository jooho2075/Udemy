import CoreConcept  from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
    return (
<section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* List 데이터의 동적 출력 */}
                        {CORE_CONCEPTS.map((conceptItem) => (
                            <CoreConcept key={conceptItem.title} {...conceptItem} />
                        ))}
                        
                        {/* 
                        <CoreConcept 
                            title={CORE_CONCEPTS[0].title} 
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}   
                        /> 
                        */}
                        {/* 이 방법과 위의 방법 두 가지 방법이 있음, 결과는 동일함*/}
                        {/* 
                        <CoreConcept {...CORE_CONCEPTS[1] }/> 
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} /> 
                        */}
                    </ul>
                </section>
    );
}

export default CoreConcepts;