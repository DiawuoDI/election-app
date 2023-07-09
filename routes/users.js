const { Router } = require("express");
const userRouter = Router();

const user = require("../controllers/users");
const validation = require("../validation/users");

const user = require("../controllers/users");
const validation = require("../validation/users");
const verification = require("../verification/verify");
const autentication = require("../validation/auth")

userRouter.post("/", validation.checkUserExists, user.createUser);
userRouter.get("/login/",autentication.checkEmailExists, user.login);
userRouter.get("/", verification.verifyToken, user.getAllUsers);
userRouter.get("/:Id", verification.verifyToken, user.getUsersById);
userRouter.delete("/", verification.verifyToken, user.deleteUser);
userRouter.patch("/", verification.verifyToken, user.updateUser);


module.exports = usersRouter;