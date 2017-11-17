const express = require('express');
const fs = require('fs-extra');
const pageRouter = require('./src/routers/pageRouter.js');
const apiRouter = require('./src/routers/apiRouter.js');

const app = express();

const PATH = `${__dirname}/src/views/home.html`;

app.use('/', pageRouter);
app.use('/api/v1', apiRouter);
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
