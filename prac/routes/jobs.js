const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Job = require("../models/Job");
const Sequelize = require("sequelize");
const Op = Sequelize.Op; // to use like operator

// Get job list
router.get("/", (req, res) =>
  Job.findAll()
    .then((jobs) => {
      // console.log(jobs);
      res.render("jobs", {
        jobs: jobs,
      });
    })
    .catch((err) => console.log(err))
);

// display add job form

router.get("/add", (req, res) => res.render("add"));

// Add a job
router.post("/add", (req, res) => {
  let { job_title, job_type, budget, description, contact_email } = req.body;
  console.log(req.body);
  console.log(job_title, job_type, budget, description, contact_email);
  let errors = [];

  // validate fields
  if (!job_title) {
    errors.push({ text: "please add a job title" });
  }
  if (!job_type) {
    errors.push({ text: "please add a job type" });
  }
  if (!description) {
    errors.push({ text: "please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "please add a contact email" });
  }

  // check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      job_title,
      job_type,
      budget,
      description,
      contact_email,
    });
  } else {
    if (!budget) {
      budget = "unknown";
    } else {
      budget = `$${budget}`;
    }

    // make lowercase and remove space after comma
    job_type = job_type.toLowerCase().replace(/, /g, ",");

    // Insert into table to set some data to work with.
    Job.create({
      job_title,
      job_type,
      budget,
      description,
      contact_email,
    })
      .then((job) => res.redirect("/jobs"))
      .catch((err) => console.log(err));
  }
});

// search for jobs

router.get("/search", (req, res) => {
  let { term } = req.query;

  term = term.toLowerCase();

  Job.findAll({ where: { job_type: { [Op.like]: "%" + term + "%" } } })
    .then((jobs) => res.render("jobs", { jobs }))
    .catch((err) => console.log(err));
});

module.exports = router;
