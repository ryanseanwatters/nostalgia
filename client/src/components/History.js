import React from 'react'; 

import './History.css';

class History extends React.Component {
    render() {
      return (
        <div className='History'>
          <div onClick={() => alert('clicked first date')}> december 2, 2021 </div>
          <div onClick={() => alert('clicked second date')}> october 21, 2021 </div>
          <div onClick={() => alert('clicked third date')}> september 8, 2021 </div>
        </div>
      )
    }
}

export default History;
