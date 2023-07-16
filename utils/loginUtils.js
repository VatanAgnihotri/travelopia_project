const jwt = require("jsonwebtoken");
const userModal = require("../modals/users");
// Secret key for JWT
const env = process.env;
const secretKey = env["JWT_KEY"];
// Sample user data (replace with your own database integration)

// Login route
const createToken = (req, res, next) => {
  const { user, pass } = req.body;
  userModal
    .findOne({ username: user, password: pass })
    .lean()
    .then((val) => {
      const user = { ...val };
      console.log("user :: ", typeof user);
      if (!user) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      const token = jwt.sign(
        { id: user._id, username: user.username, email: user.email },
        secretKey,
        { expiresIn: "1h" }
      );
      res.status(200).send({ token: `Bearer ${token}` });
    })
    .catch((err) => {
      res.status(401).send({ message: "Unauthorized!", err });
    });
};

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    next();
  });
};

module.exports = { createToken, authenticateToken };
