import { useEffect, useRef } from "react";
import './style.css'; // Ensure this file also imports the CSS

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

export default InputWithLabel;
