const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpException = require("../validation/http-exception");

const checkCandidateExists = async(req,res,next)=> {
    const candidateName = req.body.candidateName;
    const positionId = req.body.positionId
    const candidate = await prisma.candidates.findFirst({
        where: {
            candidateName,
            positionId,
        }
    }) 

    if (candidate) {
        return       next(new HttpException(422, error.message))
        
    }
    else{
        next()
    }

};

module.exports = {
    checkCandidateExists
}