import { useState } from "react";

function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    }); // useState에 할당된 초기 상태

     const handleChange = (inputIdentifier, newValue) => { // input 태그와 연결시키는 함수
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
     };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.initialInvestment} 
                        onChange={(event) => handleChange('initialInvestment', event.target.value)} 
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => handleChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => handleChange('ExpectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required
                        value={userInput.duration}
                        onChange={(event) => handleChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}

export default UserInput;