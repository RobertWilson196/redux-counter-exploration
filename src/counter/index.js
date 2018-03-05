//initial state
const initialState = 0;

//reducer
const countReducer = (state = initialState, action) =>
{
  switch(action.type){

    case 'INCREMENT':
      state = state + 1;
      return state;

    case 'DECREMENT':
      state = state - 1;
      return state;
    
    default:
      return state;
  }
};

export default countReducer;