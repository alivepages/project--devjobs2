const Router = require('express').Router;
const pageRouter = Router();

pageRouter
  .get('/', (req, res) => {
    res.render('home')
  });

pageRouter
  .get('/about', (req, res) => {
    res.render('about')
});

module.exports = pageRouter;
