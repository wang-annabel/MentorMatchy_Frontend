import { useState } from "react";
import "./App.css";
import HomeHero from "./components/HomeHero";
import NavBar from "./components/NavBar";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <HomeHero />
      </div>
    </>
  );
}

export default App;
