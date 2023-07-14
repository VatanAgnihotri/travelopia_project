var express = require("express");
const saveQuery = require("../controllers/saveQuery");
const getList = require("../controllers/getList");
var router = express.Router();

router.post("/save", async (req, res, next) => {
  try {
    const body = req.body;
    const saved = await saveQuery(body);
    if (saved)
      res
        .status(201)
        .json({ data: [], message: "Saved Successfully!", input: body });
    else
      res.status(500).json({
        errorType: "InternalServerError",
        message: "Internal Server Error",
      });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({
      errorType: "InternalServerError",
      message: error,
    });
  }
});

router.get("/list", async (req, res, next) => {
  try {
    const list = await getList();
    res.status(200).json({ data: [...list] });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({
      errorType: "InternalServerError",
      message: error,
    });
  }
});

module.exports = router;
