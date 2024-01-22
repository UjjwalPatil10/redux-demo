import React, { useContext, useReducer, useState } from "react";
import CounterContext from "./CounterContext";
import { incrementAction, decrementAction, resetAction } from "./action";

//import React, { Component } from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { dispatch } from "react-redux";
// import User from "../components/User";
// import Page from "../components/Page";
// import * as pageActions from "../actions/PageActions";
// import * as getUser from "../actions/UserActions";

const C = () => {
  const { count, dispatch } = useContext(CounterContext);

  const increment = () => {
    dispatch(incrementAction(2));
  };
  const decrement = () => {
    dispatch(decrementAction(2));
  };
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 2);
  // };

  // const decrement = () => {
  //   setCount(count - 2);
  // };
  // const initialState = 0;
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "increment": {
  //       return state + action.payload;
  //     }

  //     case "decrement": {
  //       return state - action.payload;
  //     }
  //     case "reset": {
  //       return initialState;
  //     }
  //   }
  // };
  // const [count, dispatch] = useReducer(reducer, initialState);
  // // const action = { type: "increment",payload:2 };

  // //action creator
  // const incrementAction = (payload = 1) => ({ type: "increment", payload });
  // const decrementAction = (payload = 1) => ({ type: "decrement", payload });
  // const increment = () => {
  //   dispatch(incrementAction(2));
  // };

  // const decrement = () => {
  //   dispatch(decrementAction(2));
  // };

  return (
    <>
      <h2>C component Count:{count}</h2>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
      <button onClick={() => dispatch(resetAction())}>X</button>
    </>
  );
};

export default C;
