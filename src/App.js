import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Counter from './Counter';
import { increment, decrement } from './counter/actions';

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
    count: state
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
 