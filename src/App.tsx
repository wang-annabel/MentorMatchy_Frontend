//import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/navbar/index";
import LoginPage from "./components/pages/login";
import MatchesPage from "./components/pages/matches";
import ProfilePage from "./components/pages/profile";
import Navbar from "./components/navbar/NavbarElements";
import AccountCreation from "./pages/AccountCreation";
import AccountCreationBasicInfo from "./pages/AccountCreation_BasicInfo";
import WorkStyle from "./pages/AccountCreation_WorkStyle";
import { useState } from "react";
import SignUp from "./components/pages/signup";

const App = () => {
   const [userProfile, setUserProfile] = useState({
     FIRST_NAME: '',
     LAST_NAME: '',
     
   });
   const[email, setEmail] = useState("");
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");

  // setUserProfile(prev => ({...prev, name: "hello"}))
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/accountCreation" element={<AccountCreation />} />
        <Route path="/basicInfo" element={<AccountCreationBasicInfo />} />
        <Route path="/workStyle" element={<WorkStyle />} />

      </Routes>
    </Router>
    </>
  );
};

export default App;
