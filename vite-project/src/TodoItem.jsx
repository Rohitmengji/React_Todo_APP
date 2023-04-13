export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  timestamp,
}) {
  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span>{title}</span>
        <br />
        <span> {timestamp}</span>
      </label>
      <button onClick={() => deleteTodo(id)} className='btn btn-danger'>
        Delete
      </button>
    </li>
  );
}
