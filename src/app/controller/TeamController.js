const Team = require("../model/Team");

class TeamController {
  // save one
  async store(req, res) {
    const data = await Team.create(req.body);
    return res.json(data);
  }

  // get all
  async index(req, res) {
    const data = await Team.find({});
    return res.json(data);
  }

  // get detailed
  async detail(req, res) {
    const data = await Team.find({ _id: req.body.teamID });
    return res.json(data);
  }

  // delete all
  async deleteAll(req, res) {
    const data = await Team.remove({});
    return res.json(data);
  }
}

module.exports = new TeamController();
