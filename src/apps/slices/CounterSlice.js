import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      //immutable change
      //return is mandatory
      return { value: state.value + action.payload };
    },
    decrement: (state, { payload }) => {
      //mutable change
      //don't return
      state.value -= payload;
    },
    reset: () => ({ value: 0 }),
  },
});

// const action = {type:"domain/action"}
// const action = {type:"counter/increment"}
// action creators
export const { reset, increment, decrement } = counterSlice.actions;
export const selectCounter = (state) => state?.counter?.value;
export default counterSlice.reducer;
// export const counterReducer = () => state?.counter?.value;
