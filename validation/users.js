const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpException = require("../validation/http-exception");

const  checkUserExists = async(req,res,next)=> {
    const Id = req.body.Id;
const user = await prisma.users.findUnique({
    where: {
        Id,
      }
})
if (user) {
     return       next(new HttpException(422, error.message))

    }
else {
     next()
}
}

module.exports ={
  checkUserExists
};