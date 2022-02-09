const Redis = require("ioredis");

const entriesCache = new Redis(); 

let isInitialized = false; 

const entry1 = {
  entryId: '1',
  userId: '1',
  createdAt: 1643443200000,
  questions: [
    {
      'q': 'What is Lorem Ipsum?',
      'a': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Maloru (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line.',
    },
    {
      'q': '',
      'a': '',
    },
    {
      'q': '',
      'a': '',
    }
  ]
}

const entry2 =  {
  entryId: '2',
  userId: '1',
  createdAt: 1639296000000,
  questions: [
    {
      'q': 'What is Lorem Ipsum?',
      'a': 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line.',
    },
    {
      'q': '',
      'a': '',
    },
    {
      'q': '',
      'a': '',
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


