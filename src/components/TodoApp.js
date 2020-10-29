import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Others from './Others'
import { TodoContext } from '../context/TodoContext';

const TodoApp = () => {
  const { isLoggedin } = useContext(TodoContext);

  if (!isLoggedin) {
    return <Redirect to="/"/>;
  }
  return (
    <>
      <AddTodo />
      <TodoList />
      <Others />
    </>
  );
};

export default TodoApp;
