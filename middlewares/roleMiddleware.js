import jwt from "jsonwebtoken";

export default function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(403).json({ message: "Not authorized!" });
      }

      const { roles: userRoles } = jwt.verify(
        token,
        process.env.JWT_ACCESS_SECRET
      );

      let hasRole = false;

      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });

      if (!hasRole) {
        return res.status(403).json({
          statusCode: 403,
          stringStatus: "Forbidden",
          message: "Access is denied!",
        });
      }

      next();
    } catch (e) {
      console.log(e);
      return res.status(403).json({
        statusCode: 403,
        stringStatus: "Forbidden",
        message: "Not authorized!",
      });
    }
  };
};