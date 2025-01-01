import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice";
import userReducer from "@/app/user/userSlice";

// create store
const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
	},
	devTools: true,
});

// export store
export default store;
