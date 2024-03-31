const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");

/* GET /skills  */
router.get("/", skillsCtrl.index);

//get /skills/new
router.get("/new", skillsCtrl.new);

// Get /skils/:id
router.get("/:id", skillsCtrl.show);

// POST /skills
router.post("/", skillsCtrl.create);

//DELETE /skills/:id
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
