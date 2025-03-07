// import { IconButton } from '@mui/material';
import './App.css'
import FormDemo from './FormDemo';
// import Button from '@mui/material/Button';
// import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      {/* 
      <Button size="small" variant="contained" onClick={() => alert("Hi!!")}>Contained</Button>
      <Button variant="text">Text</Button>
      <Button color="success" variant="outlined">Outlined</Button><br />

      <IconButton color="secondary" aria-label="add an alartm">
        <AlarmIcon />
      </IconButton><br /> 
      */}

      <Navbar />
      <RatingDemo />
      <FormDemo />
    </div>
  );
}

export default App
