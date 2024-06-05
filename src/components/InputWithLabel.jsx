import { useEffect, useRef } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "/src/style.css"; // Ensure this file also imports the CSS

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{children}: </label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

// Define propTypes for InputWithLabel
InputWithLabel.propTypes = {
  children: PropTypes.node.isRequired,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
