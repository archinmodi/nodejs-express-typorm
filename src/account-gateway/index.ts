import express from "express";
import "reflect-metadata";

import {
  AuthController,
  ForgotPasswordController,
  LoginController,
  LogoutController,
  RegiterController
} from "./Controller";
import {
  ForgotPasswordValidator,
  LoginValidator,
  RegisterValidator
} from "./Validator";

const router = express.Router();

/* Auth user details route */
router.post("/auth", AuthController);

/* Logout controller route */
router.post("/auth/logout", LogoutController);

/* Login controller route */
router.post("/auth/login", LoginValidator, LoginController);

/* Register controller route */
router.post("/auth/register", RegisterValidator, RegiterController);

/* Forgot password route */
router.post(
  "/auth/forgot-password",
  ForgotPasswordValidator,
  ForgotPasswordController
);

export default router;
