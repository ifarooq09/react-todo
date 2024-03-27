import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!todoTitle.trim()) return;

    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };

    onAddTodo(newTodo);

    setTodoTitle("");
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input
          id="todoTitle"
          type="text"
          name="title"
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <button type="submit" style={{ marginLeft: "5px" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
