const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET /skills  */
router.get("/", skillsCtrl.index);

//get /skills/new
router.get("/new", skillsCtrl.new);

// Get /skils/:id
router.get("/:id", skillsCtrl.show);

module.exports = router;
