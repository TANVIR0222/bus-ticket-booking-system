import type { Request, Response } from "express";
import ApiError from "../../common/utils/api-error.js";
import ApiResponse from "../../common/utils/api-response.js";
import { registerPayloadMethod } from "./auth.models.js";
import AuthinticationService from "./auth.service.js";

const authinticationService = new AuthinticationService();

class AuthenticationController {
  public async handleRegister(req: Request, res: Response) {
    try {
      const validationResults = await registerPayloadMethod.safeParseAsync(
        req.body,
      );

      if (!validationResults.success) {
        throw ApiError.badRequest(
          "Validation error",
          validationResults.error.issues,
        );
      }

      const user = await authinticationService.handleRegister(
        validationResults.data,
      );

      ApiResponse.create(res, "User registered successfully", 201, user);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal server error",
        errors: error.errors || null,
      });
    }
  }
}

export default AuthenticationController;
