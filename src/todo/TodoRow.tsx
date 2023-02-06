import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const TodoRow = () => {
  return (
    <div>
      <div className="flex justify-between space-x-2 items-center p-1 border mt-2 rounded-md shadow-md w-72">
        <div className=" flex flex-row items-center space-x-2">
          <input
            className="w-5 h-5   accent-yellow-400"
            checked
            type="checkbox"
          />
          <h3 className=" text-2xl items-center mb-2">ddd</h3>
        </div>
        <TiDeleteOutline className="text-2xl  cursor-pointer" />
      </div>
      s
    </div>
  );
};

export default TodoRow;
