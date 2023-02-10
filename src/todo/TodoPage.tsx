import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Navbar from "./Navbar";
import { todsSelector } from "./selector";
import TodoForm from "./TodoForm";
import TodoRow from "./TodoRow";
const TodoPage = () => {
  const [form, setForm] = useState(true);
  const formVisable = () => {
    setForm(!form);
  };
  const todo = useSelector(todsSelector);
  console.log("todo", todo);
  return (
    <div>
      <Navbar />
      <div className="sm:ml-40 ml-10">
        <h1 className="mt-20 text-2xl">Things to do</h1>
        {todo.map((t) => (
          <TodoRow todo={t} key={t.id} />
        ))}
        {form && (
          <Button onClick={formVisable} them="highlight">
            +Add Todo
          </Button>
        )}

        {!form && <TodoForm formVisable={formVisable} />}
      </div>
    </div>
  );
};
export default TodoPage;
