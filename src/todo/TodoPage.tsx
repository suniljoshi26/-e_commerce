import React, { useState } from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoRow from "./TodoRow";
const TodoPage = () => {
  const [form, setForm] = useState(true);
  const formVisable = () => {
    setForm(!form);
  };
  return (
    <div>
      <Navbar />
      <div className="sm:ml-40 ml-10">
        <TodoRow />
        {form && (
          <Button onClick={formVisable} them="highlight">
            +Add Todo
          </Button>
        )}

        {!form && <TodoForm formVisable={formVisable} />}
        <TodoRow />
      </div>
    </div>
  );
};
export default TodoPage;
