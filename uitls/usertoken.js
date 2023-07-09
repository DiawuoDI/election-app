var jwt =require("jsonwebtoken");

const signToken = (id) => {
    const secretKey = process.env.SECRET_KEY;
    var token = jwt.sign({ id }, secretKey);
    return token;
  };
  module.exports ={
    signToken
  }