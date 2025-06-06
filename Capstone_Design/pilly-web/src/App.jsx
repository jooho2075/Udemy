import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import Membership from './components/Membership.jsx';
import HealthInfo from './components/HealthInfo.jsx';
import Needs from './components/Needs.jsx';
import FinishMembership from './components/FinishMembership.jsx';
import Diet from './components/Diet.jsx';
import Medicine from './components/Medicine.jsx';
import Exercise from './components/Exercise.jsx';
import BulletinBoard from './components/BulletinBoard.jsx';
import Repassword from './components/Repassword.jsx';
import FinishRepassword from './components/FinishRepassword.jsx';
import WriteBulletinBoard from './components/WriteBulletinBoard.jsx';
import AddMedicine from './components/AddMedicine.jsx';
import Search from './components/Search.jsx';
import AddDiet from './components/AddDiet.jsx';
import AddExercise from './components/AddExercise.jsx';

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
            <Route path='/Diet' element={<Diet/>}></Route>
            <Route path='/Medicine' element={<Medicine/>}></Route>
            <Route path='/Exercise' element={<Exercise/>}></Route>
            <Route path='/BulletinBoard' element={<BulletinBoard/>}></Route>
            <Route path='/Repassword' element={<Repassword/>}></Route>
            <Route path='/FinishRepassword' element={<FinishRepassword/>}></Route>
            <Route path='/BulletinBoard' element={<BulletinBoard/>}></Route>
            <Route path='/WriteBulletinBoard' element={<WriteBulletinBoard/>}></Route>
            <Route path='/AddMedicine' element={<AddMedicine/>}></Route>
            <Route path='/Search' element={<Search/>}></Route>
            <Route path='/AddDiet' element={<AddDiet></AddDiet>}></Route>
            <Route path='/AddExercise' element={<AddExercise></AddExercise>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App
