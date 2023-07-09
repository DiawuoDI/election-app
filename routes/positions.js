
const { Router } = require("express");
const positionRouter = Router();
const position = require("../controllers/positions");

positionRouter.post("/", position.createPositionsFunc);
positionRouter.get("/:positionId",position.getAllPositions,);
positionRouter.get("/:id", position.getPositionsById);
positionRouter.delete("/", position.removePositionsById);
positionRouter.patch('/',position.updatePositionsFuc);

module.exports = positionRouter