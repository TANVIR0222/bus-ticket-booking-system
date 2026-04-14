import {
  boolean,
  index,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers.js";

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    firstName: varchar({ length: 255 }).notNull(),
    lastName: varchar({ length: 255 }),
    email: varchar({ length: 322 }).notNull().unique(),
    password: varchar({ length: 55 }).notNull(),

    isVerified: boolean().default(false).notNull(),

    verificationsToken: text(),
    refreshToken: text(),
    resetPasswordToken: text(),

    resetPasswordExpires: timestamp(),

    ...timestamps,
  },
  (table) => [
    uniqueIndex("email_idx").on(table.email),
    index("first_name_idx").on(table.firstName),
  ]
);
