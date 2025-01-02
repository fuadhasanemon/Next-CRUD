import createUser from "@/libs/createUser";
import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Get all users data
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
	const users = await getAllUser();
	return users;
});

// Create user
export const createUsers = createAsyncThunk(
	"user/createUsers",
	async (data) => {
		const user = await createUser(data);
		return user;
	}
);
