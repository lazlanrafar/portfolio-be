const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  ReadSkillRepository: async () => {
    return prisma.skill.findMany();
  },
  /**
   * @param {Object} data - nama
   */
  CreateSkillRepository: async (data) => {
    return prisma.skill.create({
      data,
    });
  },
  /**
   * @param {Int} id id skill
   * @param {Object} data nama
   */
  UpdateSkillRepository: async (id, data) => {
    return prisma.skill.update({
      where: {
        id: +id,
      },
      data,
    });
  },
  /**
   * @param {Int} id id skill
   */
  DeleteSkillRepository: async (id) => {
    return prisma.skill.delete({
      where: {
        id: +id,
      },
    });
  },
};
