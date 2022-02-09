import './Home.css';
import Entry from './Entry';
import Header from './Header';
import History from './History';

function Home() {

  async function fetchHello() {
    console.log('huh')
    const res = await fetch('http://localhost:4200/hello', {
      method: 'GET'
    }); 

    const data = await res.json()
    console.log('API Res: ', data);
  }
  return (
    <div className="App">      
    
    {/* <div onClick={() => fetchHello()}>fetch</div> */}

      <Header />
      <div className='App-body'>
        <History className='App-body-child'/>
        <Entry className='App-body-child' />
      </div>
    </div>
  );
}

export default Home;
