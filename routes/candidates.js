
const { Router } = require("express");
const candidateRouter = Router();
const candidate = require("../controllers/candidates");


candidateRouter.post("/", candidate.createCandidateFunc);

candidateRouter.get("/:positionId",candidate.getCandidateByPositionId);

candidateRouter.get("/:id", candidate.getSingleCandidate);

candidateRouter.delete("/", candidate.removeCandidateById);

candidateRouter.patch('/',candidate.updateCandidateFunc);

module.exports = candidateRouter