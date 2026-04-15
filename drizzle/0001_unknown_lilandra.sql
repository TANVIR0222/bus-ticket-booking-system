DROP INDEX "first_name_idx";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "first_name" varchar(55) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" varchar(55);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "email_verified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
CREATE INDEX "first_name_idx" ON "users" USING btree ("first_name");--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "firstName";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "lastName";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "isVerified";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "verificationsToken";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "refreshToken";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "resetPasswordToken";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "resetPasswordExpires";