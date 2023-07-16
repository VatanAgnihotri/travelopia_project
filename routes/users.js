var express = require("express");
const { createToken } = require("../utils/loginUtils");
var router = express.Router();

/* GET users listing. */
router.post("/", createToken);

module.exports = router;
