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
// ranking
routes.get("/team/ranking", TeamController.ranking);
//detailed
routes.get("/team/:id", TeamController.detail);

// game
routes.get("/game", GameController.index);
routes.post("/game", GameController.store);
routes.delete("/game", GameController.deleteAll);

module.exports = routes;
