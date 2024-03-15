
const AddTodoForm = (props) => {

  const handleAddTodo = (event) => {
    event.preventDefault();

    const todoTitle = event.target.title.value;

    props.onAddTodo(todoTitle);

    event.target.reset();

  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title: </label>
        <input id="todoTitle" type="text" name="title" />
        <button type="submit" style={{ marginLeft: "5px"}}>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
