import './Home.css';
import Header from './Header';
import History from './History';
import { useEffect, useState } from 'react';
import NewEntry from './NewEntry';
import ViewEntry from './ViewEntry';

const API_URL = 'http://localhost:4200';

function Home(props) {

  // default userId to 1, update when impl sign in
  const { userId = 1 } = props;

  const [entries, setEntries] = useState([]);
  const [dateToEntriesMap, setDateToEntriesMap] = useState({});
  const [viewEntry, setViewEntry] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); 

  // update dateToEntriesMap each time entries is updated
  useEffect(() => {
    const map = {}; 

    entries.forEach((e) => {
      map[e.createdAt] = e;
    });

    setDateToEntriesMap(map);
  }, [entries]);

  useEffect(() => {
    getEntries(userId);
  }, [userId]);

  const getEntries = async (userId) => {
    await fetch(`${API_URL}/entries/${userId}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setEntries(data.entries))
  }

  const handleDateSelect = ((date) => {
    setViewEntry(true);
    setSelectedDate(date);
  })

  const selectNew = () => {
    setViewEntry(false);
    setSelectedDate(null);
  }

  // console.log('before return entries', entries)
  // console.log('before return dateToEntriesMap', dateToEntriesMap)
  // console.log('before return viewEntry', viewEntry)
  // console.log('before return selectedDate', selectedDate)

  return (
    <div className="Home">      

      <Header />
      
      <div className="Home-body">
        <History 
          className="Home-body-child"
          dates={Object.keys(dateToEntriesMap)}
          handleDateSelect={handleDateSelect}
          selectNew={selectNew}
        />
        
        { viewEntry ? 
          <ViewEntry className="Home-body-child" entryId={dateToEntriesMap[selectedDate].entryId} />
          : <NewEntry className="Home-body-child" />
        }
      </div>
    
    </div>
  );
}

export default Home;
