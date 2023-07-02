const { Router } = require("express");
const votingRouter = Router();

const votes = require("../controllers/voting");
const validation = require("../validation/voting");

votingRouter.post("/", validation.checkVoteExists, votes.addVoting);
votingRouter.get("/", votes.getVotes);


module.exports = votingRouter;