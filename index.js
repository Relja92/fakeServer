const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const data = require('./data');

const app = express();
const port = 3003;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//USERS API
app.get('/users', (req, res) => {
    res.send(data.usersResponse);
});

app.post('/users', (req, res) => {
    res.send(req.body);
});

app.patch('/users/:id', (req, res) => {
    res.send(req.body);
});

app.delete('/users/:id', (req, res) => {
    res.send(true);
});

//ROLES API
app.get('/roles', (req, res) => {
    res.send(data.rolesResponse);
});

app.post('/roles', (req, res) => {
    res.send(req.body);
});

app.patch('/roles/:id', (req, res) => {
    res.send(req.body);
});

app.delete('/roles/:id', (req, res) => {
    res.send(true);
});

//SKILLS API
app.get('/skills', (req, res) => {
    res.send(data.skillsResponse);
});

app.post('/skills', (req, res) => {
    res.send(req.body);
});

app.patch('/skills/:id', (req, res) => {
    res.send(req.body);
});

app.delete('/skills/:id', (req, res) => {
    res.send(true);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
