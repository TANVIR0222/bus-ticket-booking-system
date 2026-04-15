import jwt from "jsonwebtoken";

interface UserTokenPayload {
  id: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export function createUserToken(payload: UserTokenPayload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyUserToken(token: string): UserTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserTokenPayload;
  } catch (error) {
    console.log("verifyUserToken error:", error);
    return null;
  }
}
