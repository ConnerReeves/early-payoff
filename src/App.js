import React from "react";
import { connect } from "react-redux";
import { decrement, getCount, increment } from "./redux/modules/counter";

const App = ({ count, decrement, increment }) => (
  <div>
    <div>The count is {count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

const mapStateToProps = state => ({
  count: getCount(state)
});

const mapDispatchToProps = {
  decrement,
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
