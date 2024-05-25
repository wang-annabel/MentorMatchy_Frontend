import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/navbar/index';
import LoginPage from './components/pages/login';
import MatchesPage from './components/pages/login';
import ProfilePage from './components/pages/login';
import Navbar from "./components/navbar/NavbarElements";


const App = () => {
    return <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/matches" element={<ProfilePage/>} />
        <Route path="/profile" element={<MatchesPage/>} /> 
        </Routes>
    </Router>
    
  
};

export default App;