import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
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
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <Header title="TodoList" />
          <TodoForm />
          <TodoList data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
