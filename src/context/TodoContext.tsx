import { createContext, ReactNode, useState } from "react";

type TodoProviderProps = {
  children: ReactNode;
};

interface ITodo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface ITodoContext {
  todos: ITodo[];
  addTodo: (newTodo: ITodo) => void;
  updateTodo: (id: number) => void;
}

const TodoContext = createContext<ITodoContext>({} as ITodoContext);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      text: "Boredom",
      isCompleted: false,
    },
    {
      id: 2,
      text: "New Item",
      isCompleted: false,
    },
  ]);

  function addTodo(newTodo: ITodo) {
    setTodos([newTodo, ...todos]);
  }

  function updateTodo(id: number) {
    const data = todos.find((x) => x.id === id);

    if (data) {
      data.isCompleted = !data.isCompleted;
    }

    setTodos([...todos]);
  }
  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
