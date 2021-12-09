// connect to database job_poster
const { Sequelize } = require("sequelize");
module.exports = new Sequelize(
  "postgres://postgres:rhino1234@localhost:5432/job_poster"
);
