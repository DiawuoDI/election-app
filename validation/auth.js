const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpException = require("../validation/http-exception");

const checkEmailExists = async (req, res, next) =>{
    const email = req.body.email;
    const voters = await prisma.voters.findFirst({
      where: {
        email,
    },
});
if (!voters) {
  return       next(new HttpException(422, error.message))

} else {
  next();
}
};


const userEmail = async (req, res, next) =>{
  const email = req.body.email;
  const voters = await prisma.voters.findFirst({
    where: {
      email,
  },
});
if (!voters) {
return       next(new HttpException(422, error.message))

} else {
next();
}
};
module.exports = {
checkEmailExists,
userEmail
};