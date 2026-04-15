ALTER TABLE "users" ADD COLUMN "verificationsToken" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "refreshToken" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "resetPasswordToken" text;