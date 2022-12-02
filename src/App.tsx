import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <Header title="TodoList" />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
