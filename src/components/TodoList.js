import React, { useContext, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { TodoContext } from '../context/TodoContext';
import { myTodosQuery, toggleTodoMutation, deleteTodoMutation } from '../queries/querie';
import client from '../client/client';

const TodoList = () => {
  const { loading, error, data } = useQuery(myTodosQuery);
  const { username } = useContext(TodoContext);

  useEffect(() => {
  client.cache.reset();
    return () => {
      client.cache.reset();
    }
  }, [])

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <>
      <h2>{username}&apos;s Todo List</h2>
      {data.myTodos.filter(todo => !todo.deleted).map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </>
  );
};

const textStyle = {
  textDecoration: 'line-through',
};

const Todo = ({ id, text, done }) => {
  const [toggleTodo, {
    loading: loadingToggle,
  }] = useMutation(toggleTodoMutation);
  const [deleteTodo, {
    loading: loadingDelete,
  }] = useMutation(deleteTodoMutation);

  const loading = loadingToggle || loadingDelete;

  const onChange = () => {
    console.log(typeof id, id);
    toggleTodo({ variables: { id } });
  };

  const onClick = () => {
    console.log(typeof id, id);
    deleteTodo({ variables: { id } });
  };

  if (loading) {
    return <li>Loading...</li>;
  }
  return (
    <li>
      <span style={done ? textStyle : null}>{text}</span>
      <input type="checkbox" checked={done} onChange={onChange} />
      <button onClick={onClick}>X</button>
    </li>
  );
};

export default TodoList;
