import React, { useReducer } from "react";
import A from "./A";
import B from "./B";
import C from "./C";

import CounterContext from "./CounterContext";
// import Parent from "./Parent";

const Parent = () => (
  <>
    <A />
    <hr />
    <B />
    <hr />
    <C />
  </>
);

const WithoutRedux = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return state + action.payload;
      }

      case "decrement": {
        return state - action.payload;
      }
      case "reset": {
        return initialState;
      }
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  // const action = { type: "increment",payload:2 };

  return (
    <>
      <CounterContext.Provider value={{ count, dispatch }}>
        <Parent />
      </CounterContext.Provider>
    </>
  );
};

export default WithoutRedux;
