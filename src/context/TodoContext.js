import React, { createContext, useReducer } from 'react';

import TodoReducer, { todoActionCreators } from './TodoReducer';

const initialState = {
  username: '',
  isLoggedin: false,
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const logIn = (username) => dispatch(todoActionCreators.logIn(username));
  const logOut = () => dispatch(todoActionCreators.logOut());

  return (
    <TodoContext.Provider
      value={{
        isLoggedin: state.isLoggedin,
        username: state.username,
        logIn,
        logOut,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
