const express = require("express");
const routes = express.Router();

const TeamController = require("./app/controller/TeamController");

routes.get("/", (req, res) => {
    res.redirect("/team");
 });

routes.get("/team", TeamController.index);
routes.post("/team", TeamController.store);
routes.delete("/team", TeamController.deleteAll);

module.exports = routes;