import './App.css'
// import Greeter from "./Greeter";
// import Die from "./Die";
import ListPicker from './ListPicker';

function App() {
  return (
    <div>
      {/*
      <Greeter person="Park" from="Colt" />
      <Greeter />
      <Greeter person="Lee" from="Colt" /> 
     
      <Die numSides={20}/>
      <Die />
      <Die numSides={10}/> 
      */}
      <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={["a", "b", "c"]}/>
    </div>
  );
}

export default App
