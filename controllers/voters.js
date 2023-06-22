const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createVotersFunc = async (req, res, next) => {
    try {
       const data = req.body;
    const voters = await prisma.voters.create({
      data,
    });
    res.status(201).json({
      voters,
    });
    } catch (error) {
        console.log(error)
    }
  };


const getAllVoters = async (req, res, next) => {
    try {
      const data = req.body;
      const voters = await prisma.voters.findMany({
        data,
      });
      res.status(201).json({
        voters,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getVotersById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const voters = await prisma.voters.findUnique({
        where: {
          id,
        },
      });
      res.status(200).json({
        voters,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateVotersFuc = async (req, res, next) => {
    try{
    const data = req.body;
    const voters = await prisma.voters.patch({
      where: {
        studentId,
      },
      data,
    });
    res.status(200).json({
      voters,
    });
   } catch (error) {
    console.log(error)
   }
  };

  const  removeVotersById = async(req,res,next)=>{
    const data = req.body;
    const id = req.params.id;
    try {
      const voters = await prisma.voters.delete({
        where: {
          studentId,
        },
      });
      res.status(404).json(voters);
    } catch (error) {
      console.log(error);
    }
}




  module.exports = {
  getAllVoters,
  getVotersById,
  createVotersFunc,
  updateVotersFuc,
  removeVotersById
  };