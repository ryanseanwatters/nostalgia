import './Home.css';
import Entry from './Entry';
import Header from './Header';
import History from './History';

function Home() {

  async function fetchHello() {
    const res = await fetch('http://localhost:4200/hello', {
      method: 'GET'
    }); 

    const data = await res.json()
    console.log('API Res: ', data);
  }
  
  return (
    <div className="Home">      
    
    {/* <div onClick={() => fetchHello()}>fetch</div> */}

      <Header />
      <div className="Home-body">
        <History className="Home-body-child"/>
        <Entry className="Home-body-child" />
      </div>
    </div>
  );
}

export default Home;
