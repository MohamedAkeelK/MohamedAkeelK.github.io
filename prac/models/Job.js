const Sequelize = require("sequelize");
const db = require("../config/database");

const Job = db.define("job", {
  job_title: {
    type: Sequelize.STRING,
  },
  job_type: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  budget: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = Job;
