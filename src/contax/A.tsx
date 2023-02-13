import React, { createContext, useState } from "react";
import B from "./B";
export const context = createContext({});
const A = () => {
  const [a, setA] = useState("");
  console.log("AAA", a);
  return (
    <>
      <context.Provider value={setA}>
        <B />
        <div className="">{a}</div>
      </context.Provider>
    </>
  );
};
export default A;
