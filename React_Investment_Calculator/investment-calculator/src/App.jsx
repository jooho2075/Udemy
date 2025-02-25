import { useState } from "react";

import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
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

  return(
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      <Results input={userInput}/>
    </>
  );
}

export default App
