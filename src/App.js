import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Counter from './Counter';
import { incrementAction, 
         decrementAction,
         incrementByAction, 
         decrementByAction } from './counter/actions';

const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class App extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <Counter {...this.props}/>
        <Counter {...this.props}/>
      </div>
    );
  }
}
const mapStateToProps = (state) =>
{
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
    incrementBy: (int) => dispatch(incrementByAction(int)),
    decrementBy: (int) => dispatch(decrementByAction(int))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
 