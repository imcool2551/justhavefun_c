import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
  const { number, increment, decrement, reset } = useContext(CounterContext);
  return (
    <div>
      <h4>{number}</h4>
      <button onClick={increment}>+</button>
      <button onClick={reset}>RESET</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
