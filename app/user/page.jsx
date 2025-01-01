"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userApi";
import { selectUser } from "./userSlice";

const UserPage = () => {
	const dispatch = useDispatch();

	const { users } = useSelector(selectUser);

	console.log(users);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);
	return (
		<>
			<h1>User list</h1>
			<hr />
			<ul>
				{users &&
					users.map((user, index) => (
						<ul key={index}>
							<li>{user.name}</li>
							<li>{user.email}</li>
							<li>{user.gender}</li>
						</ul>
					))}
			</ul>
		</>
	);
};

export default UserPage;
