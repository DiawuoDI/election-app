const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const  checkVoterExists = async(req,res,next)=> {
    const studentId = req.body.studentId;
const voter = await prisma.voters.findUnique({
    where: {
        studentId,
      }
})
if (voter) {
     return res.status(200).json(
        {
            message: "voter has registered already"
        }
        );
    }
else {
     next()
}
}

module.exports ={
  checkVoterExists
}
