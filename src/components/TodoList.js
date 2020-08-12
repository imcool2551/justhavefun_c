import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import useAxios from '../hooks/useAxios';

const TodoList = () => {
  const { todos, filter } = useContext(TodoContext);
  const { isLoading, isError } = useAxios('http://localhost:5000');

  const todoList = todos
    .filter(({ text }) => text.toLowerCase().includes(filter.toLowerCase()))
    .map((todo) => <Todo key={todo.id} {...todo} />);

  return (
    <>
      {isError && <div>Error!</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h4>
            {todos.filter((todo) => todo.done === true).length} / {todos.length}{' '}
            JOBS DONE
          </h4>
          <ul>{todoList}</ul>
        </>
      )}
    </>
  );
};

const textStyle = {
  textDecoration: 'line-through',
};

const Todo = ({ id, text, done }) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);
  const onChange = () => {
    toggleTodo(id);
  };

  const onClick = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <Link
        to={{
          pathname: `/todo/${id}`,
          state: {
            id,
            text,
            done,
          },
        }}
      >
        <span style={done ? textStyle : null}>{text}</span>
      </Link>
      <button onClick={onClick}>X</button>
      <input type="checkbox" checked={done} onChange={onChange} />
    </li>
  );
};

export default TodoList;
