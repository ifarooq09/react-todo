import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import "/src/style.css" //Ensure this file also imports the CSS
import PropTypes from "prop-types"; // Import PropTypes

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
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

// Define propTypes for AddTodoForm
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
