import axios from "axios";

const createUser = async (data) => {
	// get response
	const response = await axios.post("http://localhost:3000/api/user", data);

	// validation
	if (!response.data) throw new Error("User data not found");

	// send response
	return response.data.users;
};

export default createUser;
