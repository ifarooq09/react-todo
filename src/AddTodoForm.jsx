import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

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
        <InputWithLabel
          todoTitle={todoTitle}
          handleTitleChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button
          type="submit"
          style={{
            marginLeft: "5px",
            background: "green",
            color: "white",
            padding: 2,
            width: 100,
            height: 25,
            borderRadius: 8,
            border: "none",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
