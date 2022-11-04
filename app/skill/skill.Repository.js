const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  ReadSkillRepository: async () => {
    return prisma.skill.findMany();
  },
  CreateSkillRepository: async (data) => {
    return prisma.skill.create({
      data,
    });
  },
};
