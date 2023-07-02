
const { Router } = require("express");
const voterRouter = Router();
const voter = require("../controllers/voters");
const validation = require("../validation/voters");


voterRouter.post("/",validation.checkVoterExists, voter.createVoter);

voterRouter.get("/login/",voter.login);

voterRouter.get("/",voter.getAllVoters);

voterRouter.get("/:studentId", voter.getVotersById);

voterRouter.delete("/", voter.deleteVoter);

voterRouter.patch('/',voter.updateVoter);

module.exports = voterRouter