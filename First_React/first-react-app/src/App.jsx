import './App.css'
//import Greeter from "./Greeter";
import Die from "./Die";

function App() {
  return (
    <div>
      {/* 
      <Greeter person="Park" from="Colt" />
      <Greeter person="Kim" from="Colt" />
      <Greeter person="Lee" from="Colt" /> 
      */}
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
    </div>
  );
}

export default App
