const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPositionsFunc = async (req, res, next) => {
    try {
       const data = req.body;
    const positions = await prisma.positions.create({
      data,
    });
    res.status(201).json({
      positions,
    });
    } catch (error) {
        console.log(error)
    }
  };


const getAllPositions = async (req, res, next) => {
    try {
      const data = req.body;
      const positions = await prisma.positions.findMany({
        data,
      });
      res.status(201).json({
        positions,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getPositionsById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const positions = await prisma.positions.findUnique({
        where: {
          id,
        },
      });
      res.status(200).json({
        positions,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updatePositionsFuc = async (req, res, next) => {
    try{
    const data = req.body;
    const positions = await prisma.positions.patch({
      where: {
        id,
      },
      data,
    });
    res.status(200).json({
      positions,
    });
   } catch (error) {
    console.log(error)
   }
  };

  const  removePositionsById = async(req,res,next)=>{
    const data = req.body;
    const id = req.params.id;
    try {
      const positions = await prisma.positions.delete({
        where: {
          id,
        },
      });
      res.status(404).json(positions);
    } catch (error) {
      console.log(error);
    }
}

module.exports = {
  getAllPositions,
  getPositionsById,
  createPositionsFunc,
  updatePositionsFuc,
  removePositionsById
  };