import './App.css'
// import Greeter from "./Greeter";
// import Die from "./Die";
//import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
import Slots from './Slots';

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

      {/* 
      <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={["a", "b", "c"]}/>
       */}

      {/* 
      <Heading color='magenta' text={"Welcome!!"} fontSize="20px" />
      <Heading color='teal' text={"Welcome!!"} fontSize="48px" />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategrey"]} />    
      */}
      <Slots />
      <Slots />
    </div>
  );
}

export default App
