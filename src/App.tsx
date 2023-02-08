import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./nav/NavBar";
import FormValidation from "./FormValidation";
import TodoRow from "./todo/TodoRow";
import TodoPage from "./todo/TodoPage";

function App() {
  const object1 = [
    {
      a: "somestring",
      b: 42,
      c: false,
    },
  ];
  const obj = Object.keys(object1);
  console.log(obj);
  const a = obj.map((s: any) => object1[s]);
  console.log("keys", a);

  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <NavBar /> */}
      {/* <FormValidation /> */}
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
