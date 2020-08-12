import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import SearchTodo from './SearchTodo';

const Todo = () => {
  return (
    <>
      <AddTodo />
      <SearchTodo />
      <TodoList />
    </>
  );
};

export default Todo;
