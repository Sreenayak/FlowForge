import { createHmac, timingSafeEqual } from "node:crypto";

const tokenLifetimeSeconds = 60 * 60;

function getSecret() {
  const secret = process.env.NEXTAUTH_SECRET;

  if (!secret) {
    throw new Error("NEXTAUTH_SECRET is not configured.");
  }

  return secret;
}

export function createPasswordResetToken(email: string) {
  const expiresAt = Math.floor(Date.now() / 1000) + tokenLifetimeSeconds;
  const payload = `${email.toLowerCase()}.${expiresAt}`;
  const signature = createHmac("sha256", getSecret()).update(payload).digest("hex");

  return Buffer.from(`${payload}.${signature}`).toString("base64url");
}

export function verifyPasswordResetToken(token: string) {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [email, expiresAtText, signature] = decoded.split(".");
    const payload = `${email}.${expiresAtText}`;
    const expectedSignature = createHmac("sha256", getSecret()).update(payload).digest("hex");

    if (!email || !expiresAtText || !signature || !timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return null;
    }

    if (Number(expiresAtText) < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return email;
  } catch {
    return null;
  }
}