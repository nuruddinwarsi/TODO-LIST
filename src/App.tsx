import { useEffect, useState } from 'react';

import Form from './Form';
import List from './List';

import './index.css';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState((local: string | null) => {
    local = localStorage.getItem('TODOS');
    if (local == null) return Array<Todo>;

    return JSON.parse(local);
  });

  useEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos]);

  function addTodoItem(title: string) {
    setTodos((currentTodos: Array<Todo>) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos: Array<Todo>) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }
  function deleteTodo(id: string) {
    setTodos((currentTodos: Array<Todo>) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Form onSubmit={addTodoItem} />
      <h1 className="header">Todo List</h1>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
