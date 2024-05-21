import { useEffect, useRef } from "react";

const InputWithLabel = ({ children, todoTitle, handleTitleChange}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[inputRef])
  return (
    <>
      <label htmlFor="todoTitle" style={{ color: "blue" }}>{children}: </label>
      <input
        id="todoTitle"
        type="text"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
        style={{ height: 20 }}
      />
    </>
  );
};

export default InputWithLabel;
