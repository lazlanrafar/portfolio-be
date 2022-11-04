const express = require("express");
const {
  ReadSkillController,
  CreateSkillController,
  UpdateSkillController,
} = require("./skill.controller");
const router = express.Router();

router.get("/", ReadSkillController);
router.post("/", CreateSkillController);
router.put("/:id", UpdateSkillController);

module.exports = router;
