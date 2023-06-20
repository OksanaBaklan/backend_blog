/** @format */

import express from "express";
import {
  loginHandler,
  passwordChangeHandler,
  authorizeUser,
  emailConfirmationHandler,
  passwordReset,
  passwordRecovery,
} from "../controllers/AuthControllers.js";
import globalTryCatchHandler from "../controllers/errorControllers.js";
import { authorizationHandler } from "../middleware/authorization.js";

const router = express.Router();

router.post("/login", globalTryCatchHandler(loginHandler));
router.put(
  "/change-password",
  authorizationHandler,
  globalTryCatchHandler(passwordChangeHandler)
);
router.get(
  "/authorize-user",
  authorizationHandler,
  globalTryCatchHandler(authorizeUser)
);
router.get(
  "/confirm-email/:token",
  globalTryCatchHandler(emailConfirmationHandler)
);
router.post("/password-reset", globalTryCatchHandler(passwordReset));
router.put("/password-reset", globalTryCatchHandler(passwordRecovery));

export default router;
