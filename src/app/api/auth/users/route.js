import dbConnect from "@/lib/database/ConnectDB";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userEmail, userName, userPassword } = await request.json();
    const newUsr = {
      userEmail,
      userName,
      userPassword,
    };

    await dbConnect();
    const savedUser = await User.create(newUsr);

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
