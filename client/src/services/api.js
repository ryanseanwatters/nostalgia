async function getEntries(userId) {
  try {
    const res = await fetch(`${API_URL}/entries/${userId}`, { method: 'GET' }); 

    const entries = await res.json()
    
    return entries;
  } catch(err) {
    console.error('getEntries err', err);
    return Promise.reject(err);
  }
}

async function saveEntry(entry) {
  try {
    await fetch(`${API_URL}/entry`, {
      method: 'POST',
      body: { entry },
    }); 

  return Promise.resolve();
  } catch(err) {
    console.error('saveEntry err', err);
    return Promise.reject(err);
  }
}

export default {
  getEntries, 
  saveEntry,
};
 