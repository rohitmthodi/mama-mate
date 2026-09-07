import express from "express";

import { getPrenatalTracking } from "../controllers/prenatalController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const prenatalRouter = express.Router();

prenatalRouter.get(
  "/",
  authMiddleware,
  roleMiddleware("mother"),
  getPrenatalTracking,
);

export default prenatalRouter;