const express = require('express');
const fs = require('fs-extra');
const ejs = require('ejs');
const { Model } = require('objection');
const pageRouter = require('./src/routers/pageRouter.js');
const apiRouter = require('./src/routers/apiRouter.js');

const connectToDb = require('./src/database/dbConnect.js');
const dbConfigObj = require('./knexfile.js');

const app = express();
const appDb = connectToDb(dbConfigObj.development);
Model.knex(appDb);
app.locals.db = appDb;

const PATH = `${__dirname}/src/views/home.html`;

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);

// Configure EJS templatte engine
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

// Static files
app.use(express.static(__dirname + '/public'));

// error 404
app.use((req, res) => {
  res.render('404');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
