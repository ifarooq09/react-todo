import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {

  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("savedTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          todoList: todoList
        }
        resolve(data)
      }, 2000)
    }).then((result) => {
      setTodoList(result.todoList)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if(!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);

    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />
      {
        isLoading ? (
        <p>Loading...</p>
        ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
    </>
  );
}

export default App;
