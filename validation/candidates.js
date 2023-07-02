const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkCandidateExists = async(req,res,next)=> {
    const candidateName = req.body.candidateName;
    const positionId = req.body.positionId
    const candidate = await prisma.candidates.findUnique({
        where: {
            candidateName,
            positionId,
        }
    }) 

    if (candidate) {
        return res.status(422).json(
            {
                Message: "Candidate has registerd alredy"
            }
        );
        
    }
    else{
        next()
    }

};

module.exports = {
    checkCandidateExists
}