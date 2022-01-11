const express = require("express");
const routes = express.Router();

const TeamController = require("./app/controller/TeamController");
const GameController = require("./app/controller/GameController");

routes.get("/", (req, res) => {
  res.redirect("/team");
});

// team
routes.get("/team", TeamController.index);
routes.post("/team", TeamController.store);
routes.delete("/team", TeamController.deleteAll);
routes.delete("/team/:id", TeamController.delete);
routes.get("/team/ranking", TeamController.ranking);
routes.get("/team/:id", TeamController.detail);
// routes.patch("/team/:id", TeamController.customUpdate);

// game
routes.get("/game", GameController.index);
routes.get("/game/:date", GameController.indexByDate);
routes.post("/game", GameController.store);
routes.delete("/game/:id", GameController.delete);
routes.delete("/game", GameController.deleteAll);

module.exports = routes;
