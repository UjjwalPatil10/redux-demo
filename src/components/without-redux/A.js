import React, { useContext, useState } from "react";
import CounterContext from "./CounterContext";

const A = () => {
  const { count, dispatch } = useContext(CounterContext);
  // const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 2);
  };

  const decrement = () => {
    // setCount(count - 2);
  };

  return (
    <>
      <h2>A component Count:{count}</h2>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </>
  );
};

export default A;

//  "dependencies": {
//   "@emotion/react": "^11.10.6",
//   "@emotion/styled": "^11.10.6",
//   "@hookform/resolvers": "^3.0.0",
//   "@mui/icons-material": "^5.11.11",
//   "@mui/material": "^5.11.13",
//   "@testing-library/jest-dom": "^5.16.5",
//   "@testing-library/react": "^13.4.0",
//   "@testing-library/user-event": "^13.5.0",
//   "axios": "^1.3.4",
//   "axios-retry": "^3.4.0",
//   "mui-datatables": "^4.3.0",
//   "react": "^18.2.0",
//   "react-dom": "^18.2.0",
//   "react-hook-form": "^7.43.7",
//   "react-router-dom": "^6.9.0",
//   "react-scripts": "5.0.1",
//   "sweetalert": "^2.1.2",
//   "sweetalert2": "^11.7.3",
//   "web-vitals": "^2.1.4"
// }
