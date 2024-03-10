
const AddTodoForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="todoTitle">Title: </label>
        <input id="todoTitle" type="text" />
        <button type="submit" style={{ marginLeft: "5px"}}>Add</button>
      </form>
    </div>
  )
}

export default AddTodoForm
