import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./nav/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
