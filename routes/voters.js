
const { Router } = require("express");
const voterRouter = Router();
const voter = require("../controllers/voters");
const validation = require("../validation/voters");

voterRouter.get("/", voter.getVotersById);

voterRouter.post("/",validation.checkVoterExists, voter.createVotersFunc);

voterRouter.get("/:studentsId",voter.getAllVoters);

voterRouter.get("/:id", voter.getVotersById);

voterRouter.delete("/", voter.removeVotersById);

voterRouter.patch('/',voter.updateVotersFuc);

module.exports = voterRouter