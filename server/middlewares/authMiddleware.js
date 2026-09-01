import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // 1. Get Authorization header
    const authHeader = req.headers.authorization;

    // 2. Check whether token exists
    if (!authHeader) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // 3. Check Bearer format
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid authorization format",
      });
    }

    // 4. Extract token
    const token = authHeader.split(" ")[1];

    // 5. Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // 6. Store decoded user information in request
    req.user = decoded;

    // 7. Continue to controller
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;