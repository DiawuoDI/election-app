
const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient();
const cloudinary = require("../uitls/cloudinary");
const HttpException = require("../validation/http-exception");


const createCandidateFunc = async (req, res, next) => {
  try {
    const data = req.body
    console.log(data);

    const photo = req.file ? req.file.path :undefined;
    if (photo) {
      const uploaded = await cloudinary.uploader.upload(photo,{
        folder:'election/candidates'
      });
      if (uploaded) {
        data.profile =uploaded.secure_url;
        
      }
      
    }

    const candidates = await prisma.candidates.create({
      data,
    });
    res.status(201).json({
      candidates,
    });
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
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
        next(new HttpException(422, error.message))
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
        next(new HttpException(422, error.message))
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
    next(new HttpException(422, error.message))
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
      next(new HttpException(422, error.message))
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
      next(new HttpException(422, error.message))
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





