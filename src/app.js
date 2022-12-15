// In src/app.js add this code:
const express = require('express');
const { Cat } = require('./models');

const app = express();

// we expect to have to parse json from request bodies, 
// so we need the JSON middleware
app.use(express.json());

// we will put our routes and controller functions here

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat));
})

app.get('/cats', (req, res) => {
    Cat.findAll().then(cat => res.status(201).json(cat));
});

app.get('/cats/:catID', (req, res) => {
    Cat.findByPk(req.params.catID).then(cat => res.status(201).json(cat));
});
module.exports = app;