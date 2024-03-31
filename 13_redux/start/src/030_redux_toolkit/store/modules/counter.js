import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    add(state, { type, payload }) {
      console.log({ type, payload });
      return state + payload;
    },
    minus(state, { type, payload }) {
      console.log({ type, payload });
      return state - payload;
    },
  },
});

const { add, minus } = counter.actions;
//const add = (payload) => {
//  return {
//    type: "counter/+",
//    payload,
//  };
//};
//
//const minus = (payload) => {
//  return {
//    type: "counter/-",
//    payload,
//  };
//};

export { add, minus };

export default counter.reducer;
