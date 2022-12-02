import React from "react";

interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

function TodoList() {
  const data: TodoItem[] = [
    {
      id: 1,
      text: "Big Things",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Another world",
      isCompleted: true,
    },
  ];

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
