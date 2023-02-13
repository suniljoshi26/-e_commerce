import React, { useContext, useState } from "react";
import { context } from "./A";
const C = () => {
  const setA = useContext(context) as (a: string) => void;
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setA(input);
  };

  return (
    <>
      <input
        className=" border border-gray-500 p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className=" px-4 py-2 bg-indigo-300" onClick={handleSubmit}>
        {" "}
        save
      </button>
    </>
  );
};
export default C;
