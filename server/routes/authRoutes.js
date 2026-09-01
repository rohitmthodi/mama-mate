import express from "express";
import { registerMother, loginUser } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerMother);

authRouter.post("/login", loginUser);

authRouter.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "You are authenticated",
    user: req.user,
  });
});

authRouter.get(
  "/admin-test",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    return res.status(200).json({
      message: "Welcome Admin",
      user: req.user,
    });
  },
);

authRouter.get(
  "/mother-test",
  authMiddleware,
  roleMiddleware("mother"),
  (req, res) => {
    return res.status(200).json({
      message: "Welcome Mother",
      user: req.user,
    });
  },
);

export default authRouter;