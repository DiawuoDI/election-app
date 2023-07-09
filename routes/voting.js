const { Router } = require("express");
const votingRouter = Router();

const votes = require("../controllers/voting");
const validation = require("../validation/voting");
const candidate =require("../controllers/candidates")
const verification =("../verification/verifytoken")

votingRouter.get("/candidates/:positionId",candidate.getCandidateByPositionId);
votingRouter.post("/", validation.checkVoteExists, votes.addVoting);
votingRouter.get("/", votes.getVotes);


module.exports = votingRouter;