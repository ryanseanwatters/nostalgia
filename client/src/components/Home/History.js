import React, { useEffect, useLayoutEffect } from 'react'; 
import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils';

import './History.css';

export default function History({ dates, handleDateSelect, selectNew }) {
  return (
    <div className="History">
      <div key="today" onClick={selectNew}> today </div>
      { 
        dates.map((date) => (
          <div key={date} onClick={() => handleDateSelect(date)}> {formatDate(new Date(parseInt(date)))} </div>)
        )
      }
    </div>
  )
}
