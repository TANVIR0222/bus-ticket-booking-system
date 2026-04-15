import crypto from "crypto";
import jwt from "jsonwebtoken";

// @ts-ignore
const generateAccessToken = (payload) => {
  // @ts-ignore

  jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
  });
};
// @ts-ignore

const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET!);
};

// @ts-ignore
const generateRefreshToken = (payload) => {
  // @ts-ignore
  jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE_IN || "24h",
  });
};
// @ts-ignore

const verifyRefreshToken = (token) => {
  // @ts-ignore
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

const generateResetToken = () => {
  const rowToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(rowToken)
    .digest("hex");

  return { rowToken, hashedToken };
};

export {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  verifyAccessToken,
  verifyRefreshToken,
};
