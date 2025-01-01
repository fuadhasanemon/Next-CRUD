import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userApi";

// create slice
const userSLice = createSlice({
	name: "user",
	initialState: {
		users: [],
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users = action.payload;
		});
	},
});

// selectors
export const selectUser = (state) => state.user;

// actions
export const {} = userSLice.actions;

// reducer
export default userSLice.reducer;
