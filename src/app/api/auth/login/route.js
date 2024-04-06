import dbConnect from "@/lib/database/ConnectDB";
import User from "@/models/user.model";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/token/genarateToken";
export async function POST(request) {
  try {
    const { userEmail, userPassword } = await request.json();
    await dbConnect();
    if (!userEmail) {
      return NextResponse.json({
        error: "Email is required",
      });
    }

    if (!userPassword) {
      return NextResponse.json({
        error: "Password is required",
      });
    }
    const existsUser = await User.findOne({ userEmail: userEmail });

    if (existsUser) {
       generateToken(existsUser, cookies);
      const match = await bcrypt.compare(userPassword, existsUser.userPassword);
      if (match) {
        return NextResponse.json({
          message: "Login successfull",
          success: true,
          userEmail: existsUser.userEmail,
          userId: existsUser._id,
        });
      } else {
        return NextResponse.json({
          error: "credential not match",
        });
      }
    } else {
      return NextResponse.json({
        error: "user Not found",
      });
    }
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
