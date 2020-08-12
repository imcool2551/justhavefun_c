import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../context/TodoContext';

const useAxios = (url) => {
  const { fetched, init, addTodo } = useContext(TodoContext);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const delayedFunction = (fn) => (addr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = fn(addr);
        resolve(res);
      }, 2000);
    });
  };

  useEffect(() => {
    console.log('Effect');
    const initialize = async () => {
      try {
        setLoading(true);
        if (!fetched) {
          const delayedAxios = delayedFunction(axios);
          const result = await delayedAxios(url);
          result.data.forEach(({ id, text }) => addTodo(id, text));
          init();
        }
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    initialize();
  }, []);

  return {
    isLoading,
    isError,
  };
};

export default useAxios;
