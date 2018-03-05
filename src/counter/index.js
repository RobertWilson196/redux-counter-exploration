import * as types from './types';

//initial state
const initialState = 0;

//reducer
const countReducer = (state = initialState, action) =>
{
  switch(action.type){

    case types.INCREMENT:
      state = state + 1;
      return state;

    case types.DECREMENT:
      state = state - 1;
      return state;
    
    default:
      return state;
  }
};

export default countReducer;