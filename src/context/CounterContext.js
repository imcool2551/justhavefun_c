import React, { createContext, useReducer } from 'react';
import CounterReducer, { actionCreators } from './CounterReducer';

const initialState = {
  number: 0,
};

export const CounterContext = createContext(initialState);

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const increment = () => {
    dispatch(actionCreators.increment());
  };

  const decrement = () => {
    dispatch(actionCreators.decrement());
  };

  const reset = () => {
    dispatch(actionCreators.reset());
  };

  return (
    <CounterContext.Provider
      value={{
        number: state.number,
        increment,
        decrement,
        reset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
