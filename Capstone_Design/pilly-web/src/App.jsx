import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Login from './components/Login.jsx';

function App() {
  return(
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App
