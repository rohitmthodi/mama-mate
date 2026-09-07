import express from "express";

import {
  createPregnancy,
  getPregnancy,
  updatePregnancy,
} from "../controllers/pregnancyController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const pregnancyRouter = express.Router();

pregnancyRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("mother"),
  createPregnancy,
);

pregnancyRouter.get(
  "/",
  authMiddleware,
  roleMiddleware("mother"),
  getPregnancy,
);

pregnancyRouter.put(
  "/",
  authMiddleware,
  roleMiddleware("mother"),
  updatePregnancy,
);

export default pregnancyRouter;