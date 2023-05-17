import { Todo } from './App';
import Item from './Item';

// TODO: Typecast prop
export default function List(props: any) {
  const { todos, toggleTodo, deleteTodo } = props;
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos found'}
      {todos.map((todo: Todo) => {
        return (
          <Item
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
