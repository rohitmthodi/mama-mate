import express from "express";

import {
  createMotherHealth,
  getMotherHealth,
} from "../controllers/motherHealthController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const motherHealthRouter = express.Router();

motherHealthRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("mother"),
  createMotherHealth,
);

motherHealthRouter.get(
  "/",
  authMiddleware,
  roleMiddleware("mother"),
  getMotherHealth,
);

export default motherHealthRouter;