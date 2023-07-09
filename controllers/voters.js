const { PrismaClient } = require("@prisma/client");
const { signToken } = require("../uitls/token");
const HttpException = require("../validation/http-exception");
const prisma = new PrismaClient();

const login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const voters = await prisma.voters.findFirst({
      where: {
        email,
        password,
      },
    });
    console.log(voters)
    if (!voters) {
      return res.status(422).json({
        message: "Invalid Password",
      });
    } else {
      const token = signToken(voters.studentId)
      res.status(200).json({
        token
      })
    }
  } catch (error) {
    console.log(error);
      next(new HttpException(422, error.message))
  }
};
const createVoter = async (req, res, next) => {
  try {
    const data = req.body;
    const voters = await prisma.voters.create({
      data,
    });
    res.status(201).json({
      voters,
    });
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
  }
};
const getAllVoters = async (req, res, next) => {
  try {
    const voters = await prisma.voters.findMany({});
    res.status(200).json({
      voters,
    });
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))

  }
};
const getVotersById = async (req, res, next) => {
  try {
    const studentId = req.params.studentId;
    const voter = await prisma.voters.findFirst({
      where: {
        studentId: studentId,
      },
    });
    res.status(200).json(voter);
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
  }
};
const updateVoter = async (res, req, next) => {
  try {
    const studentId = req.params.studentId;
    const data = req.body;
    const voters = await prisma.voters.update({
      where: {
        studentId,
      },
      data,
    });
    res.status(200).json({
      voters,
    });
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
  }
};

const deleteVoter = async (req, res, next) => {
  const studentId = req.params.studentId;
  try {
    const deletedVoter = await prisma.voters.delete({
      where: {
        studentId,
      },
    });
    if (deletedVoter) {
      res.status(200).json({
        message: "Voter deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "Voter not found",
      });
    }
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
  }
};
module.exports = {
  getAllVoters,
  getVotersById,
  createVoter,
  updateVoter,
  deleteVoter,
  login,
};