import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import Membership from './components/Membership.jsx';
import HealthInfo from './components/HealthInfo.jsx';
import Needs from './components/Needs.jsx';
import FinishMembership from './components/FinishMembership.jsx';

function App() {
  return(
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/Membership" element={<Membership/>}></Route>
            <Route path="/HealthInfo" element={<HealthInfo/>}></Route>
            <Route path='/Needs' element={<Needs/>}></Route>
            <Route path='/FinishMembership' element={<FinishMembership/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App
