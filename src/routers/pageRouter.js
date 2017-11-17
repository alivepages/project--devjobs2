const Router = require('express').Router;
const pageRouter = Router();

pageRouter
  .get('/', (req, res) => {
    res.send('<h1>HOME page</h1>')
  });

pageRouter
  .get('/about', (req, res) => {
    res.send('<h1>ABOUT page</h1>')
  });

module.exports = pageRouter;
