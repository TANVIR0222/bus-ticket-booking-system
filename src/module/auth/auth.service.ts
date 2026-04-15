import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "node:crypto";
import { db } from "../../common/config/db.js";
import ApiError from "../../common/utils/api-error.js";
import { usersTable } from "../../db/schema/user.schema.js";

class AuthinticationService {
  public async handleRegister(data: any) {
    const { email, firstName, lastName, password } = data;

    // 1. check existing user
    const userEmailResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (userEmailResult.length > 0) {
      throw ApiError.conflict("Email already exists");
    }

    // 2. password hash
    const salt = randomBytes(32).toString("hex");
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    // 3. insert user
    const [result] = await db
      .insert(usersTable)
      .values({
        email,
        firstName,
        lastName,
        password: hashedPassword,
        salt,
      })
      .returning({ id: usersTable.id });

    // 4. return response
    return {
      //   id: result.id,
      email,
      firstName,
      lastName,
    };
  }
}

export default AuthinticationService;
