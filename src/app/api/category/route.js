import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Hello, world! i am here" },
    { status: 200 }
  );
}
