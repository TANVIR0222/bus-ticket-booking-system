CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"firstName" varchar(255) NOT NULL,
	"lastName" varchar(255),
	"email" varchar(322) NOT NULL,
	"password" varchar(55) NOT NULL,
	"isVerified" boolean DEFAULT false NOT NULL,
	"salt" text NOT NULL,
	"verificationsToken" text,
	"refreshToken" text,
	"resetPasswordToken" text,
	"resetPasswordExpires" timestamp,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX "email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "first_name_idx" ON "users" USING btree ("firstName");