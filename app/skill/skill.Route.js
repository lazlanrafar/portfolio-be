const express = require("express");
const {
  ReadSkillController,
  CreateSkillController,
  UpdateSkillController,
  DeleteSkillController,
} = require("./skill.controller");
const router = express.Router();

router.get("/", ReadSkillController);
router.post("/", CreateSkillController);
router.put("/:id", UpdateSkillController);
router.delete("/:id", DeleteSkillController);

module.exports = router;
