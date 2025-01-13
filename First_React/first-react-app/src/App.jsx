import './App.css'
// import Greeter from "./Greeter";
// import Die from "./Die";
//import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
import ShoppingList from './ShoppingList';

const data = [
  {item: 'eggs', quantity: 12, completed: false},
  {item: 'milk', quantity: 1, completed: true},
  {item: 'chicken breast', quantity: 4, completed: false},
  {item: 'carrot', quantity: 6, completed: true},
]

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

      {/* 
      <Slots />
      <Slots /> 
      */}

      <ShoppingList items={data}/>
    </div>
  );
}

export default App
