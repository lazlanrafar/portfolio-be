const { Ok, InternalServerError } = require("../../utils/http-response");
const {
  ReadSkillRepository,
  CreateSkillRepository,
} = require("./skill.repository");

module.exports = {
  ReadSkillController: async (req, res) => {
    try {
      const skills = await ReadSkillRepository();

      Ok(res, skills, "Berhasil membaca data skill");
    } catch (error) {
      InternalServerError(res, error, "Gagal membaca data skill");
    }
  },
  CreateSkillController: async (req, res) => {
    try {
      const payload = req.body;
      const skill = await CreateSkillRepository(payload);

      Ok(res, skill, "Berhasil membuat data skill");
    } catch (error) {
      console.log(error);
      InternalServerError(res, error, "Gagal membuat data skill");
    }
  },
};
