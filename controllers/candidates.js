
const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient();


const createCandidateFunc = async (req, res, next) => {
  try {
    const data = (req.body)
    console.log(data);
    const candidates = await prisma.candidates.create({
      data: data
    });
    res.status(201).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
  };

  const getCandidateFunc = async (req, res, next) => {
    try {
        const id = (req.params.id)
       const data = req.body;
    const candidates = await prisma.candidates.getAll({
      data,
    });
    res.status(201).json({
      candidates,
    });
    } catch (error) {
        console.log(error)
    }
  };

  const getSingleCandidate = async (req, res, next) => {
    try{
    const id = (req.params.id);
    const data = req.body;
    const candidate = await prisma.candidate.findUnique({
      where: {
        positionId,
      },
    });
    res.status(200).json({
      candidate,
    });
    } catch (error) {
        console.log(error)
    }
    }
  const updateCandidateFunc = async (req, res, next) => {
    try{
    const data = req.body;
    const candidates = await prisma.candidates.patch({
      where: {
        positionId,
      },
  
      data,
    });
    res.status(200).json({
      candidates,
    });
   } catch (error) {
    console.log(error)
   }
  };

  const  getCandidateByPositionId = async(req,res,next)=>{
    const data = req.body;
    const positionId = req.params.positionId;
    try {
      const candidate = await prisma.candidates.findUnique({
        where: {
          positionId,
        },
      });
      res.json(candidate);
    } catch (error) {
      console.log(error);
    }
}
const  removeCandidateById = async(req,res,next)=>{
    const data = req.body;
    const id = req.params.id;
    try {
      const candidate = await prisma.candidates.delete({
        where: {
          candidateId,
        },
      });
      res.status(404).json(candidate);
    } catch (error) {
      console.log(error);
    }
}
  



  module.exports={
    createCandidateFunc,
    getCandidateFunc,
    updateCandidateFunc,
    removeCandidateById,
    getCandidateByPositionId,
    getSingleCandidate
}





