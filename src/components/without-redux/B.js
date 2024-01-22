import React, { useContext, useState } from "react";
import CounterContext from "./CounterContext";

const B = () => {
  const { count } = useContext(CounterContext);

  //   const [count, setCount] = useState(0); //useState() not provide a  facility to store the logic every time we gave logic for every component
  const increment = () => {
    // setCount(count + 2);
  };

  const decrement = () => {
    // setCount(count - 2);
  };

  return (
    <>
      <h2>B component Count:{count}</h2>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </>
  );
};

export default B;
