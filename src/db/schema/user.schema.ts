import {
  boolean,
  index,
  pgTable,
  text,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers.js";

export const usersTable = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    firstName: varchar("first_name", { length: 55 }).notNull(),
    lastName: varchar("last_name", { length: 55 }),
    email: varchar("email", { length: 322 }).notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),

    password: text("password").notNull(),

    salt: text("salt").notNull(),

    verificationsToken: text(),
    refreshToken: text(),
    resetPasswordToken: text(),

    // resetPasswordExpires: timestamp(),

    ...timestamps,
  },
  (table) => [
    uniqueIndex("email_idx").on(table.email),
    index("first_name_idx").on(table.firstName),
  ],
);
