const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpException = require("../validation/http-exception");

const  checkVoterExists = async(req,res,next)=> {
    const studentId = req.body.studentId;
const voter = await prisma.voters.findUnique({
    where: {
        studentId,
      }
})
if (voter) {
     return       next(new HttpException(422, error.message))

    }
else {
     next()
}
}

module.exports ={
  checkVoterExists
}
