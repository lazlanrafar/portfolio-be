const express = require("express");
const { ReadSkillController } = require("./skill.controller");
const router = express.Router();

router.get("/", ReadSkillController);

module.exports = router;
