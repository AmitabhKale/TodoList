import React, { FormEvent, useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const [data, setData] = useState("");

  const { addTodo } = useContext(TodoContext);

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(), // temp. solution for generating id
      text: data,
      isCompleted: false,
    };

    addTodo(newTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <input
          type="text"
          name="todoform"
          value={data}
          className="form-control"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default TodoForm;
