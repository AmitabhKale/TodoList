import React from "react";

interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}
interface TodoListProps {
  data: TodoItem[];
}

function TodoList({ data }: TodoListProps) {
  const updateTodo = (id: number) => {
    const item = data.find((x) => x.id === id);
    console.log(item);
  };

  return (
    <ul className="list-group my-2">
      {data.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between"
        >
          {item.isCompleted ? <del>{item.text}</del> : <>{item.text}</>}
          <button
            onClick={() => updateTodo(item.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
