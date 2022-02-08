const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.json({ "hello": "marsela" })
});

app.listen(1222, () => {
    console.log('Server started on Port 1222');
});
 