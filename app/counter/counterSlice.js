import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSLice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state, action) => {
			state.count++;
		},
		decrement: (state, action) => {
			state.count--;
		},
	},
});

// selectors
export const selectCount = (state) => state.counter;

// actions
export const { increment, decrement } = counterSLice.actions;

// reducer
export default counterSLice.reducer;
