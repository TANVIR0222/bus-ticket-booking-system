import type { IVerifyEmailTemplate } from "../../interfaces/verify-email-interface.ts";

const verifyEmailTemplate = ({ name, otp }: IVerifyEmailTemplate) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      
      <h2 style="text-align:center; color:#333;">Verify Your Email</h2>
  
      <p>Dear ${name},</p>
  
      <p>Thank you for registering with <strong>Chai code</strong>.</p>
  
      <p>Please use the OTP below to verify your email address:</p>
  
      <div style="text-align:center; margin: 20px 0;">
        <span style="font-size: 28px; letter-spacing: 5px; font-weight: bold; background: #f4f4f4; padding: 10px 20px; border-radius: 8px;">
          ${otp}
        </span>
      </div>
  
      <p>This OTP is valid for <strong>5 minutes</strong>.</p>
  
      <p>If you did not request this, please ignore this email.</p>
  
      <br/>
  
      <p style="font-size: 14px; color: gray;">— Chai code Team</p>
    </div>
    `;
};

export default verifyEmailTemplate;
