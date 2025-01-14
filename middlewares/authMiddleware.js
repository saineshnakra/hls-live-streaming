const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Middleware to verify JWT token
exports.verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).send({ message: "No token provided." });

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err)
      return res.status(500).send({ message: "Failed to authenticate token." });
    req.userId = decoded.id;
    next();
  });
};
