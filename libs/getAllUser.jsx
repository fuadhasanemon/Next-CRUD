import axios from "axios";

const getAllUser = async () => {
	// get response
	const response = await axios.get("http://localhost:3000/api/user");

	// validation
	if (!response.data) throw new Error("User data not found");

	// send response
	return response.data.users;
};

export default getAllUser;
