import mongoDBConnect from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

/**
 * Get all users
 */

export const GET = async () => {
	try {
		await mongoDBConnect();

		const users = await User.find();
		return NextResponse.json({ users });
	} catch (error) {
		return NextResponse.json({ error: error.message });
	}
};

/**
 * Create user
 */

export const POST = async (request) => {
	try {
		await mongoDBConnect();

		const data = await request.json();

		const user = await User.create({
			...data,
		});
		return NextResponse.json({ user });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
};
