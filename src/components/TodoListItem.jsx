import PropTypes from "prop-types"; // Import PropTypes

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div>
      <li style={{ color: "blue" }}>
        {todo.title.toUpperCase()}
        <button
          type="button"
          style={{
            marginLeft: "10px",
            background: "green",
            color: "white",
            padding: 2,
            width: 100,
            height: 25,
            borderRadius: 8,
            border: "none",
          }}
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

// Define propTypes for TodoListItem
TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
