const express = require('express');
const cors = require('cors');

const { getEntries, saveEntry } = require('./operations');

const app = express();

app.use(cors());

app.get('/entries/:userId', getEntries);
app.post('/entry', saveEntry);

app.listen(4200, () => {
    console.log('Server started on Port 4200');
});
 