const express = require("express");
const {
  ReadSkillController,
  CreateSkillController,
} = require("./skill.controller");
const router = express.Router();

router.get("/", ReadSkillController);
router.post("/", CreateSkillController);

module.exports = router;
