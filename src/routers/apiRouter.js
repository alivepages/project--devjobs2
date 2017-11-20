const Router = require('express').Router;
const apiRouter = Router();

apiRouter
  .get('/jobs', (req, res) => {
    var db = req.app.locals.db;
    db
     .select()
     .table('job')
     .then(data => res.json(data));
  });

apiRouter
  .get('/companies', (req, res) => {
    var db = req.app.locals.db;
    db
     .select()
     .table('company')
     .then(data => res.json(data));
  });

module.exports = apiRouter;
