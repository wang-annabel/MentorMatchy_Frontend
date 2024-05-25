import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LookingFor from "./pages/LookingFor";
import AccountCreation from "./pages/AccountCreation";
import AccountCreationBasicInfo from "./pages/AccountCreation_BasicInfo";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <AccountCreationBasicInfo />
    </div>
  );
}

export default App;
