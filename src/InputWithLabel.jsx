import { useEffect, useRef } from "react";

const InputWithLabel = ({ children, todoTitle, handleTitleChange}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[inputRef])
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
