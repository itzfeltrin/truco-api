var mongodb = require("mongodb");
var endOfDay = require("date-fns/endOfDay");
var startOfDay = require("date-fns/startOfDay");

const Team = require("../model/Team");
const Game = require("../model/Game");

class GameController {
	async store(req, res) {
		let body = req.body;

		const data = await Game.create(body);
		let teamOne = await Team.find({ _id: body.teamOneID });
		let teamTwo = await Team.find({ _id: body.teamTwoID });

		if (teamOne) teamOne = teamOne[0];
		if (teamTwo) teamTwo = teamTwo[0];

		teamOne.played += 1;
		teamTwo.played += 1;

		if (body.teamOneScore > body.teamTwoScore) {
			teamOne.wins += 1;
		} else {
			teamTwo.wins += 1;
		}

		// console.log(body);
		// console.log(teamOne);
		// console.log(teamTwo);

		// updateOne({ _id: doc._id }, { $set: { name: 'foo' } })
		await Team.updateOne(
			{ _id: body.teamOneID },
			{ $set: { played: teamOne.played, wins: teamOne.wins } }
		);
		await Team.updateOne(
			{ _id: body.teamTwoID },
			{ $set: { played: teamTwo.played, wins: teamTwo.wins } }
		);

		return res.json(data);
	}

	async index(req, res) {
		const data = await Game.find({});
		return res.json(data);
	}

	async indexByDate(req, res) {
		let date = req.params.date;
		let isoDate = new Date(date);
		const data = await Game.find({
			createdAt: {
				$gte: startOfDay(isoDate),
				$lte: endOfDay(isoDate),
			},
		});
		return res.json(data);
	}

	async delete(req, res) {
		let id = req.params.id;
		const data = await Game.remove({ _id: new mongodb.ObjectID(id) });
		return res.json(data);
	}

	async deleteAll(req, res) {
		const data = await Game.remove({});
		return res.json(data);
	}
}

module.exports = new GameController();
