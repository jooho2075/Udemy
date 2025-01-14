import './App.css'
// import Greeter from "./Greeter";
// import Die from "./Die";
//import ListPicker from './ListPicker';
// import DoubleDice from './DoubleDice';
// import Heading from './Heading';
// import ColorList from './ColorList';
// import Slots from './Slots';
// import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Form from './Form';

/*
const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false},
  {id: 2, item: 'milk', quantity: 1, completed: true},
  {id: 3, item: 'chicken breast', quantity: 4, completed: false},
  {id: 4, item: 'carrot', quantity: 6, completed: true},
]
*/

// 627. 숙박시설 예제
/*
import PropertyList from './PropertyList';

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150},
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250},
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300},
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120},
  { id: 129034, name: "OceanView Condo", rating: 4.7, price: 140},
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96},
]
*/

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

      {/* 
      <ShoppingList items={data}/>
       */}

    {/* // 627. 숙박시설 예제 */}
    {/* <PropertyList properties={properties}/> */}

    <Clicker />
    <Form />
    </div>
  );
}

export default App
