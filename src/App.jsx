import { useState } from "react";
import "./assets/css/App.css";
import Form from "./Form";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Reading books", status: true },
    { id: 2, title: "Dance practice", status: false },
    { id: 3, title: "Create Todo list task", status: false },
  ]);

  const addNewTodo = (newitem) => {
    setTodos((pre) => {
      return [...pre, newitem];
    });
    console.log(newitem);
  };

  const changeStatusValue = (id) => {
    setTodos((pre) => {
      return pre.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      
    });
  };

  function DeleteItem(id) {
  setTodos((pre) => {
    return pre.filter((item) => item.id !== id);
  });
}

  return (
    <>
      <div className="container">
        <Form addNewTodo={addNewTodo} todos={todos}/>
        <Todos
          todos={todos}
          changeStatusValue={changeStatusValue}
          DeleteItem={DeleteItem}
        />
      </div>
    </>
  );
}

export default App;

// From
// Todos
// Todo
