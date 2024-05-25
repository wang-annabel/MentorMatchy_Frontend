import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LookingFor from "./pages/LookingFor";
import AccountCreation from "./pages/AccountCreation";
import AccountCreationBasicInfo from "./pages/AccountCreation_BasicInfo";
import WorkStyle from "./pages/AccountCreation_WorkStyle";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <AccountCreation />
    </div>
  );
}

export default App;
