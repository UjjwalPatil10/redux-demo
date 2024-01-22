import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectCounter,
  reset,
} from "../../apps/slices/CounterSlice";

const Y = () => {
  //access redux state
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Y component - {count}</h3>
      <button onClick={() => dispatch(increment(1))}>++</button>
      <button onClick={() => dispatch(decrement(1))}>--</button>
      <button onClick={() => dispatch(reset())}>X</button>
    </>
  );
};

export default Y;
