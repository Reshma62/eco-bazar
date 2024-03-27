import dbConnect from "@/lib/database/ConnectDB";

import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const user = await User.find({});

  return NextResponse.json({ data: user }, { status: 200 });
}
