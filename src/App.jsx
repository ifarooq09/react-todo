
const todoList = [
  {
    id: 1,
    title: "Read The Road to React 2023 book"
  },
  {
    id: 2,
    title: "Watch the Videos in CTD Dashboard"
  },
  {
    id: 3,
    title: "Complete the Assignment"
  }
]
function App() {

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {
          todoList.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App
