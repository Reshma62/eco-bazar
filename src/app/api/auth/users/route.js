import { verifiToken } from "@/lib/token/genarateToken";
import { cookies } from "next/headers";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/database/ConnectDB";
dbConnect();
export async function GET(request) {
  try {
    const users = request.user;
    console.log(users, "users my");
    const userId = await verifiToken(cookies);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
