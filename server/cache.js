const Redis = require("ioredis");

const entriesCache = new Redis(); 

let isInitialized = false; 

const entry1 = {
  entryId: '1',
  userId: '1',
  createdAt: 1643443200000,
  questions: [
    {
      qId: '20',
      q: 'What is Lorem Ipsum?',
      a: null,
    },
    {
      qId: '21',
      q: '',
      a: null,
    },
    {
      qId: '22',
      q: '',
      a: null,
    }
  ]
}

const entry2 =  {
  entryId: '2',
  userId: '1',
  createdAt: 1639296000000,
  questions: [
    {
      qId: '30',
      q: 'What is Lorem Ipsum?',
      a: null,
    },
    {
      qId: '31',
      q: '',
      a: null,
    },
    {
      qId: '32',
      q: '',
      a: null,
    }
  ]
}

// keyed by userId_entryId
// initializing the cache

async function initializeCache() {
  await entriesCache.set('1_1', JSON.stringify(entry1));
  await entriesCache.set('1_2', JSON.stringify(entry2));
  isInitialized = true;
}

const getKey = (userId, entryId) => `${userId}_${entryId}`;

async function getEntry(userId, entryId) {
  if (!isInitialized) {
    await initializeCache();
  }

  const key = getKey(userId, entryId);

  const entry = await entriesCache.get(key); 

  return JSON.parse(entry);
}


async function setEntry(entry) {
  if (!isInitialized) {
    await initializeCache();
  }

  const key = getKey(entry.userId, entry.entryId); 
  
  await entriesCache.set(key, JSON.stringify(entry)); 
}

module.exports = { getEntry, setEntry };


