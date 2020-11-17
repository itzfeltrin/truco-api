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
//detailed
routes.get("/team/detail", TeamController.detail);

// game
routes.get("/game", GameController.index);
routes.post("/game", GameController.store);
routes.delete("/game", GameController.deleteAll);

module.exports = routes;
