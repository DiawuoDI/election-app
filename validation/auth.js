const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkEmailExists = async (req, res, next) =>{
    const email = req.body.email;
    const voters = await prisma.voters.findFirst({
      where: {
        email,
    },
});
if (!voters) {
  return res.status(422).json({
    message: "Please sign up!",
  });
} else {
  next();
}
};
module.exports = {
checkEmailExists,
};