import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get all users data
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
	const users = await getAllUser();
	return users;
});
