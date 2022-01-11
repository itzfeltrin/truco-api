const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
var cors = require("cors");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();

    this.port = process.env.PORT || 8080;

    this.express.listen(this.port, () =>
      console.log(`Sua API REST está funcionando na porta ${this.port}`)
    );
  }

  database() {
    mongoose.connect(db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
