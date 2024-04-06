
const TodoListItem = ({ todo, onRemoveTodo }) => {
    
  return (
    <div>
      <li>
        {todo.title}
        <button type="button" style={{marginLeft: "10px"}} onClick={() => onRemoveTodo(todo.id)}>Remove</button>
      </li>
    </div>
  )
}

export default TodoListItem
