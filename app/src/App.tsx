import React, { useState } from "react";
import { Todo } from "./todo.model";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

const todoDeleteHnadler = (todoId: string) => {
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
}
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHnadler}/>
    </div>
  );
};

export default App;
