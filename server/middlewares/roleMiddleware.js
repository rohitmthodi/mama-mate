const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    // Check whether authenticated user exists
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }

    // Check whether user's role is allowed
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "You are not authorized to access this resource",
      });
    }

    next();
  };
};

export default roleMiddleware;