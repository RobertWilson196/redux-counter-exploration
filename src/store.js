import { Provider } from 'react-redux';
import { createStore } from 'redux';

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

//creation of the store
const store = createStore(countReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;