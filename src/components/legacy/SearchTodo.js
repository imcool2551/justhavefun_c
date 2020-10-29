import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

const SearchTodo = () => {
  const { filter, searchTodo } = useContext(TodoContext);

  const onChange = (e) => {
    searchTodo(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default SearchTodo;
