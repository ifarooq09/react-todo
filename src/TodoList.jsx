import TodoListItem from "./TodoListItem"

const TodoList = (props) => {
    const { todoList } = props;

  return (
    <div>
      <ul>
        {
          todoList.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList