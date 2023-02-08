import React from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoRow from "./TodoRow";
const TodoPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <TodoRow />
        <TodoForm />
        <TodoRow />
      </div>
    </div>
  );
};
export default TodoPage;
