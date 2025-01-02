"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, fetchUsers } from "./userApi";
import { selectUser } from "./userSlice";

const UserPage = () => {
	const dispatch = useDispatch();

	const [input, setInput] = useState({
		name: "",
		email: "",
		gender: "",
	});

	const handleInputChange = (e) => {
		setInput((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		dispatch(createUsers(input));
	};

	const { users } = useSelector(selectUser);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);
	return (
		<>
			<div>
				<form onSubmit={handleOnSubmit}>
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={input.name}
						onChange={handleInputChange}
					/>

					<input
						type="text"
						placeholder="Email"
						name="email"
						value={input.email}
						onChange={handleInputChange}
					/>

					<input
						type="text"
						placeholder="Gender"
						name="gender"
						value={input.gender}
						onChange={handleInputChange}
					/>

					<button type="submit">Add User</button>
				</form>
			</div>
			<h1>User list</h1>
			<hr />
			{users &&
				users.map((user, index) => (
					<div key={index}>
						<ul>
							<li>{user.name}</li>
							<li>{user.email}</li>
							<li>{user.gender}</li>
						</ul>
						<hr />
					</div>
				))}
		</>
	);
};

export default UserPage;
