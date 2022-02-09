const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const { getEntries, saveEntry } = require('./operations');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/entries/:userId', getEntries);
// app.put('/entry', createNewEntry);
app.post('/user/:userId/entry/:entryId', saveEntry);

app.listen(4200, () => {
    console.log('Server started on Port 4200');
});
 