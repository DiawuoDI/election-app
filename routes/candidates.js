
const { Router } = require("express");
const candidateRouter = Router();
const candidate = require("../controllers/candidates");
const validation = require("../validation/candidates")
const multer = require("multer")
const upload = multer({ dest: 'uploads/'})


candidateRouter.post("/",upload.single('profile'),validation.checkCandidateExists, candidate.createCandidateFunc);
candidateRouter.get("/:positionId",candidate.getCandidateByPositionId);
candidateRouter.get("/:id", candidate.getSingleCandidate);
candidateRouter.delete("/", candidate.removeCandidateById);
candidateRouter.patch('/',candidate.updateCandidateFunc);

module.exports = candidateRouter