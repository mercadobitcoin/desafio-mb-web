// app.js
const express = require('express');
const cors = require('cors');

const app = express();
const registrations = [];

app.use(cors());
app.use(express.json());

app.post('/registration', (req, res) => {
    const data = req.body;

    if (!data.name || !data.email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    registrations.push(data);

    res.status(200).json({
        message: 'Registration successful',
        receivedData: data,
    });
});

app.get('/registration', (req, res) => {
    res.status(200).json(registrations);
});

module.exports = app;
