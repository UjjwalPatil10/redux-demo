import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/CounterSlice";

import userReducer from "../components/user-apps/user-app/userSlice";
// import { counterReducer } from "./slices/CounterSlice";
const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    users: userReducer,
    //products:productReducer
  },
});

export default Store;
