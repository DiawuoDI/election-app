const { Router } = require("express");
const voterRouter = Router();

const voter = require("../controllers/voters");
const validation = require("../validation/voters");
const verification = require("../verification/verify");
const autentication = require("../validation/auth")

votersRouter.post("/", validation.checkVoterExists, voter.createVoter);
votersRouter.get("/login/",autentication.checkEmailExists, voter.login);
votersRouter.get("/", verification.verifyToken, voter.getAllVoters);
votersRouter.get("/:studentId", verification.verifyToken, voter.getVotersById);
votersRouter.delete("/", verification.verifyToken, voter.deleteVoter);
votersRouter.patch("/", verification.verifyToken, voter.updateVoter);

module.exports = voterRouter;
