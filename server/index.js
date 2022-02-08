const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({ "hello": "marsela" })
});

app.listen(30000, () => {
    console.log('Server started on Port 30000');
});
 