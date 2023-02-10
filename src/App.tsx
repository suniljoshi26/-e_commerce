import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./nav/NavBar";
import FormValidation from "./FormValidation";
import TodoRow from "./todo/TodoRow";
import TodoPage from "./todo/TodoPage";
type Aa = {
  a: string;
  b: number;
  c: boolean;
};
function App() {
  let object1 = {
    1: {
      a: "sumit",
      b: 42,
      c: false,
    },
    2: {
      a: "somestring",
      b: 40,
      c: true,
    },
    3: {
      a: "deepak",
      b: 42,
      c: false,
    },
  };
  const value = object1[2];
  console.log("value", value);
  const obj = Object.keys(object1);
  console.log("aaa", obj);
  const a = obj.map((s) => {
    return object1[s] as Aa;
  });
  console.log("A", a);
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
