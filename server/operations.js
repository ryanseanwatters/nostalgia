const { getEntry, setEntry } = require('./cache');

async function getEntries(req, res) {
  const { userId } = req.params; 

  // get ALL entries from DB where userId = id
  const entries = await Promise.all([getEntry(userId, '1'), getEntry(userId, '2')]);

  res.json({ entries });
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
  getEntries,
  saveEntry,
};
