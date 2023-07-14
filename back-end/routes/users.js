var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  if (req.body.user === "test@gmail.com" && req.body.pass === "Test@123")
    res.status(200).json({ data: [], message: "Login Successful!" });
  else res.status(401).json({ data: [], message: "Login Failed!" });
});

module.exports = router;
