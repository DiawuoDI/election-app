const { Router } = require("express");
const appRouter = Router();


const candidates = require("./candidates");
const positions = require("./positions");
const voters = require("./voters");
const voting = require("./voting");
const users = require("./users");


appRouter.use("/candidates", candidates);
appRouter.use("/positions", positions);
appRouter.use("/voters", voters);
appRouter.use("/voting", voting);
appRouter.use("/users", users);

module.exports = appRouter;