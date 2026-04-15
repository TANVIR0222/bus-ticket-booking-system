import { z } from "zod";

class BaseDto {
  static schema = z.object({});

  static validate(data: unknown) {
    const result = this.schema.safeParse(data);

    if (!result.success) {
      // @ts-ignore
      const errors = result.error.errors.map((e) => e.message);
      return { errors, value: null };
    }

    return { errors: null, value: result.data };
  }
}

export default BaseDto;
