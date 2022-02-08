import './App.css';
import Entry from './components/Entry';
import Header from './components/Header';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <History className='App-body-child' />
        <Entry className='App-body-child' />
      </div>
    </div>
  );
}

export default App;
