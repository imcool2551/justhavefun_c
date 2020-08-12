/* eslint-disable no-case-declarations */

// Action Types
const INIT = 'todo/INIT';
const ADD = 'todo/ADD';
const DELETE = 'todo/DELETE';
const TOGGLE = 'todo/TOGGLE';
const SEARCH = 'todo/SEARCH';

// Action Creators
export const todoActionCreators = {
  init: () => ({
    type: INIT,
    payload: {},
  }),
  addTodo: (id, text) => ({
    type: ADD,
    payload: { id, text },
  }),
  deleteTodo: (id) => ({
    type: DELETE,
    payload: { id },
  }),
  toggleTodo: (id) => ({
    type: TOGGLE,
    payload: { id },
  }),
  searchTodo: (text) => ({
    type: SEARCH,
    payload: { text },
  }),
};

// Reducer
export default function TodoReducer(state, action) {
  const { id, text } = action.payload;
  switch (action.type) {
    case INIT:
      return {
        ...state,
        fetched: true,
      };
    case ADD:
      const newTodo = {
        id,
        text,
        done: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id)
            return { id: todo.id, text: todo.text, done: !todo.done };
          return todo;
        }),
      };
    case SEARCH:
      return {
        ...state,
        filter: text,
      };
    default:
      return state;
  }
}
