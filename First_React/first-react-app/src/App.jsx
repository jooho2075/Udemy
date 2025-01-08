import './App.css'
import Greeter from "./Greeter";
import Die from "./Die";

function App() {
  return (
    <div>
      
      <Greeter person="Park" from="Colt" />
      <Greeter />
      <Greeter person="Lee" from="Colt" /> 
     
      <Die numSides={20}/>
      <Die />
      <Die numSides={10}/>
    </div>
  );
}

export default App
