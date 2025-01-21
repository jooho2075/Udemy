import './App.css';
// import Counter from './Counter';
import ScoreKeeper from './ScoreKeeper';
// import Dumbo from './Dumbo';
// import EmojiClicker from './EmojiClicker';

function App() {
  return (
    <>
    <h1>State Demo</h1>
    <ScoreKeeper numPlayers={10} target={3}/>

    {/* <Counter /> */}

    {/* <Dumbo /> */}

    {/* <EmojiClicker /> */}
    </>
  )
}

export default App
