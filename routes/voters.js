const { Router } = require("express");
const voterRouter = Router();
const voter = require("../controllers/voters");
const validation = require("../validation/voters");
const verification = require("../verification/verify");
const autentication = require("../validation/auth")
voterRouter.post("/", validation.checkVoterExists, voter.createVoter);

voterRouter.get("/login/",autentication.checkEmailExists, voter.login);

voterRouter.get("/", verification.verifyToken, voter.getAllVoters);

voterRouter.get("/:studentId", verification.verifyToken, voter.getVotersById);

voterRouter.delete("/", verification.verifyToken, voter.deleteVoter);

voterRouter.patch("/", verification.verifyToken, voter.updateVoter);

module.exports = voterRouter;
