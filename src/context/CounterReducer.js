const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const RESET = 'counter/RESET';

export const actionCreators = {
  increment: () => ({
    type: INCREMENT,
  }),
  decrement: () => ({
    type: DECREMENT,
  }),
  reset: () => ({
    type: RESET,
  }),
};

export default function CounterReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    case RESET:
      return {
        number: 0,
      };
    default:
      return state;
  }
}
