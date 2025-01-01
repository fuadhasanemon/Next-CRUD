import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSLice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {},
	extraReducers: () => {},
});

// selectors

// actions
export const {} = counterSLice.actions;

// reducer
export default counterSLice.reducer;
