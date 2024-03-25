import dbConnect from "@/lib/database/ConnectDB";

import User from "@/models/user.model";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userEmail, userName, userPassword } = await request.json();

    if (!userEmail) {
      return NextResponse.json({
        error: "Email is required",
      });
    }
    if (!userName) {
      return NextResponse.json({
        error: "Name is required",
      });
    }
    if (!userPassword) {
      return NextResponse.json({
        error: "Password is required",
      });
    }
    const existsUser = await User.find({ userEmail: userEmail });

    if (existsUser.length > 0) {
      console.log(existsUser);
      return NextResponse.json({
        error: "user already exists. try another one",
      });
    }
    const newUsr = {
      userEmail,
      userName,
      userPassword,
    };

    await dbConnect();
    const savedUser = await new User(newUsr).save();
    // generateToken(savedUser, cookies);
    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        newUser: savedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
export async function GET() {
  await dbConnect();
  const user = await User.find({});

  return NextResponse.json({ data: user }, { status: 200 });
}
