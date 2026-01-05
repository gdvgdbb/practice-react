import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = action.payload;
    }
  }
})

const { actions, reducer } = counterStore;

// 按需导方法
export const { inscrement, decrement, addToNum } = actions;

// 默认导出reducer
export default reducer;