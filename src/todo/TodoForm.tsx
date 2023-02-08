import React, { ChangeEvent, FC, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "./Button";
type TodoFormProps = {
  formVisable: () => void;
};
const TodoForm: FC<TodoFormProps> = ({ formVisable }) => {
  const [input, setInput] = useState("");
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  console.log("todo", input);

  return (
    <div className="border border-gray-200 rounded-md shadow-md p-4  mt-4">
      <h3 title="Create a todo"></h3>
      <div className="mt-4">
        <input
          onChange={handleClick}
          value={input}
          className="p-2 border border-gray-300   w-44 sm:w-72  rounded-md "
          placeholder="Write an artical about XState"
        />
      </div>
      <div className="space-x-6 mt-4 ">
        <Button onClick={formVisable}>Save</Button>
        <Button them="secondary">Cancel</Button>
      </div>
    </div>
  );
};

export default TodoForm;
