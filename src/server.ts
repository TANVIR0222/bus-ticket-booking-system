import type { Express, Request, Response } from "express";
import express from "express";
import ApiError from "./common/utils/api-error.js";
import { errorHandler } from "./common/utils/global-error-middleware.js";
import authRouter from "./module/auth/auth.route.js";

export function createApplication(): Express {
  const app = express();

  // 2. Body Parsing Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //   app.use(authMiddleware());

  app.use("/api/auth", authRouter);

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello ------ World");
  });

  app.all("{*path}", (req, res, next) => {
    next(ApiError.notFound(`Route ${req.originalUrl} not found`));
  });

  // ❗ error handler ALWAYS LAST
  app.use(errorHandler);

  return app;
}
