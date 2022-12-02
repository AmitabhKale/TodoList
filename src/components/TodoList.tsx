import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todos, updateTodo } = useContext(TodoContext);

  return (
    <ul className="list-group my-2">
      {todos.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between"
        >
          {item.isCompleted ? <del>{item.text}</del> : <>{item.text}</>}
          <button
            onClick={() => {
              updateTodo(item.id);
            }}
            className="btn btn-outline-warning"
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
