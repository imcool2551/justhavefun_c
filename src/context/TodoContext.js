import React, { createContext, useReducer } from 'react';

import TodoReducer, { todoActionCreators } from './TodoReducer';

const initialState = {
  todos: [],
  fetched: false,
  filter: '',
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const init = () => dispatch(todoActionCreators.init());
  const addTodo = (id, text) => dispatch(todoActionCreators.addTodo(id, text));
  const deleteTodo = (id) => dispatch(todoActionCreators.deleteTodo(id));
  const toggleTodo = (id) => dispatch(todoActionCreators.toggleTodo(id));
  const searchTodo = (text) => dispatch(todoActionCreators.searchTodo(text));

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        fetched: state.fetched,
        filter: state.filter,
        init,
        addTodo,
        deleteTodo,
        toggleTodo,
        searchTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
