const Team = require("../model/Team");

class TeamController {
  async store(req, res) {
    const data = await Team.create(req.body);
    return res.json(data);
  }

  async index(req, res) {
    const data = await Team.find({});
    return res.json(data);
  }

  async deleteAll(req, res) {
    const data = await Team.remove({});
    return res.json(data);
  }
}

module.exports = new TeamController();
