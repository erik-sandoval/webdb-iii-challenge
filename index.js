const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cohorts', (req, res) => {});
server.get('/api/cohorts/:id', (req, res) => {});
server.put('/api/cohorts/:id', (req, res) => {});
server.delete('/api/cohorts/:id', (req, res) => {});
server.get('/api/cohorts/:id/students', (req, res) => {});

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`listening on localhost:${port}`);
});
