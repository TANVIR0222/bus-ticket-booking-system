import { Router } from "express";
import AuthenticationController from "./auth.controller.js";

const authRouter = Router();

const authinticationController = new AuthenticationController();

authRouter.post(
  "/register",
  authinticationController.handleRegister.bind(authinticationController),
);

// authRouter.post(
//   "/sign-in",
//   authinticationController.handleSignin.bind(authinticationController),
// );
// authRouter.get(
//   "/me",
//   restrictAuthenticationUser(),
//   authinticationController.handleMe.bind(authinticationController),
// );

export default authRouter;
