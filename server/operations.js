const { getEntry, setEntry } = require('./cache');
const { v4: uuidv4 } = require('uuid');
const { default: NewEntry } = require('../client/src/components/Home/NewEntry');

async function getEntryOp(req, res) {
  const { userId, entryId } = req.params; 

  const entry = await getEntry(userId, entryId);

  res.json({ entry });
}

async function getEntries(req, res) {
  const { userId } = req.params; 

  // get ALL entries from DB where userId = id
  const entries = await Promise.all([getEntry(userId, '1'), getEntry(userId, '2')]);

  res.json({ entries });
}

async function createNewEntry(req, res) {
  const { userId } = req.params; 
  const { questions } = req.body;

  const entry = {
    userId,
    entryId: uuidv4(),
    createdAt: (new Date()).getUTCMilliseconds(),
    questions
  }

  console.log('new entry!', entry);
  
  await setEntry(entry);

  res.json({ entry });
}

async function saveEntry(req, res) {
  const { userId, entryId } = req.params; 
  const { changes = {} } = req.body; 

  let entry = await getEntry(userId, entryId);

  for(let i = 0; i < entry.questions.length; ++i) {
    const qId = entry.questions[i].qId;

    if (changes[qId]) {
      entry.questions[i].a = changes[qId];
    }
  }

  await setEntry(entry);

  res.json({ success: true });
}


module.exports = {
  getEntryOp,
  getEntries,
  saveEntry,
  createNewEntry,
};
