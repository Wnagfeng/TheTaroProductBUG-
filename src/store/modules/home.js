// 创建切片
import { createSlice } from "@reduxjs/toolkit";
const hoemSlice = createSlice({
  name: "home",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, action) {},
    decrement(state, action) {},
  },
});
export default hoemSlice.reducer;
export const { increment, decrement } = hoemSlice.actions;
