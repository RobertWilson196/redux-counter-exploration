import * as types from './types';

//initial state
const initialState = {
  count: 0
};

//reducer
const countReducer = (state = initialState, action) =>
{
  switch(action.type){

    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };

    case types.DECREMENT:
      return {
       ...state,
       count: state.count - 1 
      };
    
    default:
      return state;
  }
};

export default countReducer;