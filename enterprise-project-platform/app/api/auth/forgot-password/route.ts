import { NextResponse } from "next/server";
import { createPasswordResetToken } from "@/lib/auth/reset-token";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      { error: "Password reset email is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL to .env.local." },
      { status: 503 }
    );
  }

  const appUrl = process.env.NEXTAUTH_URL || new URL(request.url).origin;
  const token = createPasswordResetToken(email);
  const resetUrl = `${appUrl}/auth/reset-password?token=${encodeURIComponent(token)}`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: "Reset your FlowForge password",
      html: `<p>We received a request to reset your FlowForge password.</p><p><a href="${resetUrl}">Reset your password</a></p><p>This link expires in one hour.</p>`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "The reset email could not be sent. Check your email configuration." }, { status: 502 });
  }

  return NextResponse.json({ message: "If an account exists for that email, a reset link has been sent." });
}