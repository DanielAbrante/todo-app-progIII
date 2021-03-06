const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

const tasks_routes = require('./routes/tasks.routes');
app.use('/tasks', tasks_routes);

const users_routes = require('./routes/users.routes');
app.use('/users', users_routes);

app.get('*', (req, res) => {
  res.status(404).send({ error: "Route doesn't exist" });
});

module.exports = app;