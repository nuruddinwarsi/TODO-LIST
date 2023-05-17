export default function Item(props: any) {
  const { id, title, completed, toggleTodo, deleteTodo } = props;
  return (
    <li key={id}>
      <label>
        {title}
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
