var mongodb = require("mongodb");

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

  // get ranking
  async ranking(req, res) {
    try {
      let data = await Team.find({});
      data = data.sort((a, b) => {
        if (a.wins === b.wins) {
          return a.played < b.played ? -1 : 1;
        } else {
          return a.wins > b.wins ? -1 : 1;
        }
      });
      return res.json(data);
    } catch (err) {
      return res.json(err);
    }
  }

  // get detailed
  async detail(req, res) {
    let id = req.params.id;
    const data = await Team.find({ _id: id });
    return res.json(data);
  }

  // async customUpdate(req, res) {
  // 	let id = req.params.id;
  // 	await Team.updateOne(
  // 		{ _id: new mongodb.ObjectID(id) },
  // 		{ $set: { played: 26, wins: 13 } }
  // 	);
  // 	return res.json(data);
  // }

  // delete one
  async delete(req, res) {
    let id = req.params.id;
    const data = await Team.remove({ _id: new mongodb.ObjectID(id) });
    return res.json(data);
  }

  // delete all
  async deleteAll(req, res) {
    const data = await Team.remove({});
    return res.json(data);
  }
}

module.exports = new TeamController();
