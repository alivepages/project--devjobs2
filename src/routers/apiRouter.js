const Router = require('express').Router;
const apiRouter = Router();
const Job = require('../models/Job.js');
const Company = require('../models/Company.js');


apiRouter
  .get('/jobs', (req, res) => {
    Job
      .query()
      .then(data => res.json(data));
  });

apiRouter
  .get('/companies', (req, res) => {
    Company
      .query()
      .eager('job')
      .then(data => res.json(data));
  });

module.exports = apiRouter;
