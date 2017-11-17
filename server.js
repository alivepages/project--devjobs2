const express = require('express');
const fs = require('fs-extra');

const app = express();

const PATH = `${__dirname}/src/views/home.html`;


const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
  fs
    .readFile(PATH, 'utf-8')
    .then(data => {
      res.send(data);
    })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
