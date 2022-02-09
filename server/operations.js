const { getEntry, setEntry } = require('./cache');

async function getEntries(req, res) {
  const { userId } = req.params; 

  // get ALL entries from DB where userId = id
  const entries = await Promise.all([getEntry(userId, '1'), getEntry(userId, '2')]);

  res.json({ entries });
}

async function saveEntry(req, res) {
  const { entry } = req.body; 

  await setEntry(entry);

  res.json({ success: true });
}


module.exports = {
  getEntries,
  saveEntry,
};
