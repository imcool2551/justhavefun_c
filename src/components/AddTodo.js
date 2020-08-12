import React, { useContext, useRef } from 'react';
import { v4 } from 'uuid';

import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const todoRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(v4(), todoRef.current.value);
    todoRef.current.value = '';
    todoRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Add Todo..." ref={todoRef} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTodo;
