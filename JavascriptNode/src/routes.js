const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to our Express app!');
});

router.get('/about', (req, res) => {
    res.send('About this app: This is a simple demo Express application.');
});

router.get('/user/:username', (req, res) => {
    res.send(`Profile page of user: ${req.params.username}`);
});

router.post('/data', (req, res) => {
    // We'd generally get POST data from req.body, but for this demo, let's just send a response
    res.send('Received your data!');
});

module.exports = router;