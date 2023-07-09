const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpException = require("../validation/http-exception");

const  checkpositionExists = async(req,res,next)=> {
    const positiomName = req.body.positiomName;
const voter = await prisma.voters.findUnique({
    where: {
        positiomName,
      }
})
if (voter) {
     return res.status(200).json(
        {
            message: "Position has registered already"
        }
        );
    }
else {
     next()
}
}

module.exports ={
  checkpositionExists
}
