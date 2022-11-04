const { Ok } = require("../../utils/http-response");
const { ReadSkillRepository } = require("./skill.repository");

module.exports = {
  ReadSkillController: async (req, res) => {
    const skills = await ReadSkillRepository();
    Ok(res, skills, "Berhasil membaca data skill");
  },
};
