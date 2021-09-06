import { ADD, SUB } from '../actions/counterTypes';

const counter = {
  value: 0,
};

const counterReducer = (state = counter, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, value: state.value + 1 };
    case SUB:
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

export default counterReducer;
