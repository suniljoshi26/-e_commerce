import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./nav/NavBar";
import FormValidation from "./FormValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <NavBar /> */}
      <FormValidation />
    </div>
  );
}

export default App;
