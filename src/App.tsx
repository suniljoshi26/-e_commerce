import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./nav/NavBar";
import FormValidation from "./FormValidation";
import TodoRow from "./todo/TodoRow";
import TodoPage from "./todo/TodoPage";
import FormikInput from "./Formik";
// import A from "./contax/A";
import Com from "./hoc/Com";
import { Inter } from "./interview/Inter";

function App() {
  // let object1 = {
  //   1: {
  //     a: "sumit",
  //     b: 42,
  //     c: false,
  //   },
  //   2: {
  //     a: "somestring",
  //     b: 40,
  //     c: true,
  //   },
  //   3: {
  //     a: "deepak",
  //     b: 42,
  //     c: false,
  //   },
  // };
  // const value = object1[2];
  // console.log("value", value);
  // const obj = Object.keys(object1);
  // console.log("aaa", obj);
  // const a = obj.map((s) => {
  //   return object1[s] as Aa;
  // });
  // console.log("A", a);
  // const [count, setCount] = useState(0);
  // let chars = ["A", "B", "A", "C", "B", "B", "B", "H", "G", "H", "G"];

  // const aa = chars.filter((i, index) => chars.indexOf(i) === index);
  // console.log(aa);
  // let n = 5; // row or column count
  // // defining an empty string
  // let string = "";

  // for (let i = 0; i < n; i++) {
  //   // external loop
  //   for (let j = 0; j < n; j++) {
  //     // internal loop
  //     string += "*";
  //   }
  //   // newline after each row
  //   string += "\n";
  // }
  // // printing the string
  // console.log(string);
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 0; j < n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return (
    <div>
      {/* <FormikInput /> */}
      <Inter />
      {/* <Com /> */}
    </div>
  );
}

export default App;
