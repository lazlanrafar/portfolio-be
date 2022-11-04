const { Ok, InternalServerError } = require("../../utils/http-response");
const {
  ReadSkillRepository,
  CreateSkillRepository,
  UpdateSkillRepository,
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
  UpdateSkillController: async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;

      const skill = await UpdateSkillRepository(id, payload);

      Ok(res, skill, "Berhasil mengubah data skill");
    } catch (error) {
      console.log(error);
      InternalServerError(res, error, "Gagal mengubah data skill");
    }
  },
};
