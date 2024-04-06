import { dbConnect } from "@/lib/database/ConnectDB";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
dbConnect();
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
      return NextResponse.json({
        error: "User already exists. Please try another one.",
      });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUsr = {
      userEmail,
      userName,
      userPassword: hashedPassword,
    };

    const savedUser = await new User(newUsr).save();
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      newUser: savedUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
