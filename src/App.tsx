import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LookingFor from "./pages/LookingFor";
import AccountCreation from "./pages/AccountCreation";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <AccountCreation />
    </div>
  );
}

export default App;
