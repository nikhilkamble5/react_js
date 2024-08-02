import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go TO COllege",
      dueDate: "4/10/2023",
    },

    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems TodoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
