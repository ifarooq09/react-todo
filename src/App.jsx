import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import './style.css'; // Import the CSS file

async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
  };

  const url = `https://api.airtable.com/v0/${
    import.meta.env.VITE_AIRTABLE_BASE_ID
  }/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.records.map((record) => ({
      title: record.fields.title,
      id: record.id,
    }));
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to fetch data from the server.");
  }
}

async function addTodo(newTodo) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
    },
    body: JSON.stringify({ fields: { title: newTodo.title } }),
  };

  const url = `https://api.airtable.com/v0/${
    import.meta.env.VITE_AIRTABLE_BASE_ID
  }/${import.meta.env.VITE_TABLE_NAME}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const todo = await response.json();
    return { id: todo.id, title: todo.fields.title };
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to add todo to the server.");
  }
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchData()
      .then((todos) => {
        setTodoList(todos);
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      const addedTodo = await addTodo(newTodo);
      setTodoList([...todoList, addedTodo]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedTodoList = todoList.slice().sort((objectA, objectB) => {
    const titleA = objectA.title.toUpperCase();
    const titleB = objectB.title.toUpperCase();
    if (sortOrder === 'asc') {
      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
    } else {
      return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
    }
  });

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <h1>Todo List</h1>
                <AddTodoForm onAddTodo={handleAddTodo} />
                <label>
                  Sort Order:
                  <select value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </label>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList todoList={sortedTodoList} onRemoveTodo={removeTodo} />
                )}
              </>
            }
          />
          <Route
            path="/new"
            element={
              <>
                <h1>New Todo List</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
