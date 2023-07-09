const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const HttpException = require("../validation/http-exception");

const addVoting = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const votes = await prisma.voting.create({
      data,
    });
    res.status(201).json({
      votes,
    });
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
  }
};
const getVotes = async (req, res, next) => {
  try {
    const votes = await prisma.voting.findMany({});
    res.status(200).json({
      votes,
    });
  } catch (error) {
    console.log(error);
    next(new HttpException(422, error.message))
    }
  };
  module.exports = {
    addVoting,
    getVotes,
  };