const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cohorts', (req, res) => {
	db('cohorts')
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ message: 'something happened' });
		});
});

server.post('/api/cohorts', (req, res) => {
	db('cohorts')
		.insert(req.body)
		.then(data => {
			res.status(200).json({ message: 'successfully added' });
		})
		.catch(err => {
			res.status(500).json({ message: 'something happened' });
		});
});

server.get('/api/cohorts/:id', (req, res) => {
	const id = req.params.id;
	db('cohorts')
		.where({ id })
		.first()
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ message: 'something happened' });
		});
});

server.put('/api/cohorts/:id', (req, res) => {
	db('cohorts')
		.where({ id: req.params.id })
		.update(req.body)
		.then(data => {
			res.status(200).json({ message: 'successfully updated' });
		})
		.catch(err => {
			res.status(500).json({ message: 'something happened' });
		});
});

server.delete('/api/cohorts/:id', (req, res) => {
	db('cohorts')
		.where({ id: req.params.id })
		.del()
		.then(data => {
			res.status(200).json({ message: 'successfully deleted' });
		})
		.catch(err => {
			res.status(500).json({ message: 'something happened' });
		});
});

server.get('/api/cohorts/:id/students', (req, res) => {
	db('students')
		.where({ cohort_id: req.params.id })
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(500).json({ message: 'something happened' });
		});
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`listening on localhost:${port}`);
});
