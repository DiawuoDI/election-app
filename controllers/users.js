const {PrismaClient} = require("@prisma/client");
const{ signToken} = require("../uitls/usertoken");
const HttpException = require("../validation/http-exception");
const prisma = new PrismaClient();

const login = async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const users = await prisma.users.findFirst({
        where: {
          email,
          password,
        },
      });
      console.log(users)
      if (!users) {
        return res.status(422).json({
          message: "Invalid Password",
        });
      } else {
        const token = signToken(users.Id)
        res.status(200).json({
          token
        })
      }
    } catch (error) {
      console.log(error);
      next(new HttpException(422, error.message))
    }
  };

  const createUser = async(req, res, next) =>{
    try {
       const data = req.body;
       const users = await prisma.users.create({
        data,
       });
       res.status(201).json({
        users,
       });

    } catch (error) {
        console.log(error);
        next(new HttpException(422, error.message))
    }
  };

  const getAllUsers = async(req, res, next) =>{
    try {
        const users = await Prisma.users.findMany({});
        res.status (200).json({
           users ,
        });

    } catch (error) {
        console.log(error);
        next(new HttpException(422, error.message))
    }
  };

  const getUsersById = async( rea, res, next) =>{
    try{
    const Id = req.params.Id;
    const users = await Prisma.users.findFirst({
        where: {
            Id
        }
    });
    res.status(200).json({
        users,
    });

  } catch(error) {
    console.log(error);
    next(new HttpException(422, error.message));
  }  
 };
  
 const updateUser = async( req, res, next) =>{
    try {
    const Id = req.params.Id
    const data = req.body
    const user = await prisma.users.update({
        where: {
            Id
        },
        data
    });
    res.status(200).json({
      user,
    });
    
    } catch (error) {
      console.log(error);
      next(new HttpException(422, error.message)); 
    }
 };

 const deleteUser = async( req, res, next) =>{
  const Id = req.params.Id;
  try {
    const deleteUser = await prisma.user.delete({
      where:{
        Id,
      },
    });
    if (deleteUser) {
      res.status(200).json({
        message:" User deleted successfuly",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:"An Error occured",
    });
  }
 };

module.exports={
    login,
    createUser,
    getAllUsers,
    getUsersById,
    deleteUser,
    updateUser
};