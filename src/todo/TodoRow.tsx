import React, { FC } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { changeTodo } from "./Action";
import { Todo } from "./Todo";
type todoRowProp = {
  todo: Todo;
};
const TodoRow: FC<todoRowProp> = ({ todo }) => {
  const { id, done } = todo!;
  const dispatch = useDispatch();
  const handleDone = () => {
    dispatch(changeTodo(id, done));
  };
  return (
    <div>
      <div className="flex justify-between space-x-2 items-center p-1 border mt-2 rounded-md shadow-md w-72">
        <div className=" flex flex-row items-center space-x-2">
          <input
            className="w-5 h-5  accent-yellow-400"
            checked={todo.done}
            type="checkbox"
            onChange={handleDone}
          />
          <h3 className=" text-2xl items-center mb-2">
            {todo.title}
            {todo.id}
          </h3>
        </div>
        <TiDeleteOutline className="text-2xl  cursor-pointer" />
      </div>
    </div>
  );
};

export default TodoRow;
