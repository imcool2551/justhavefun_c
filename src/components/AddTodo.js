import React, { useRef } from 'react';

import { useMutation } from '@apollo/client';
import { addTodoMutation, myTodosQuery } from '../queries/querie';

const AddTodo = () => {
  const [createTodo, { data, loading }] = useMutation(addTodoMutation, {
    update(cache, { data: { addTodo } }) {
      const { myTodos } = cache.readQuery({ query: myTodosQuery });
      console.log(myTodos, '@@@');
      cache.writeQuery({
        query: myTodosQuery,
        data: { myTodos: [addTodo, ...myTodos] },
      });
    },
  });
  const todoRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo({
      variables: { text: todoRef.current.value },
    });
    todoRef.current.value = '';
    todoRef.current.focus();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          ref={todoRef}
          disabled={loading}
        />
        <button disabled={loading}>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
