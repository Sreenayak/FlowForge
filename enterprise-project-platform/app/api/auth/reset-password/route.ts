import { NextResponse } from "next/server";
import { verifyPasswordResetToken } from "@/lib/auth/reset-token";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const token = typeof body?.token === "string" ? body.token : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!verifyPasswordResetToken(token)) {
    return NextResponse.json({ error: "This reset link is invalid or expired." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must contain at least 8 characters." }, { status: 400 });
  }

  return NextResponse.json({
    message: "The reset link was verified. Connect this endpoint to your user database to persist the new password.",
  });
}