import { useState } from "react";
import { v4 as uuid } from "uuid";
import './assets/css/Form.css'

function Form({ addNewTodo, todos=[] }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  if (title.trim().length === 0) {
  alert("please put info");
  return;
}

    const isDuplicate = todos.some((todo) =>
        todo.title.trim().toLowerCase() === title.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert("This todo already exists!");
      return;
    }


    const newitem = {
      id: uuid(),
      title: title,
      status: false,
    };
    addNewTodo(newitem);

    setTitle("");
  }
  return (
    <>
    <div className="TodosContainer">
      <h2>Make your Todo List</h2>
      <form onSubmit={handleSubmit}>
        <div className="todoform">
          <input className="todo-input" placeholder="Add New Entry"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input type="submit" value="Submit" className="todo-btn"/>
        </div>
      </form>
      </div>
    </>
  );
}

export default Form;
