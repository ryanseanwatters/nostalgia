import React, { useEffect, useLayoutEffect } from 'react'; 
import { NavLink } from 'react-router-dom';
import { formatDate } from '../utils';

import './History.css';

export default function History({ dates, handleDateSelect, selectNew }) {
  return (
    <div className="History">
      <div onClick={selectNew}> today </div>
      {/* causing each child must have "key" prop warning */}
      { 
        dates.map((date) => (
          <div onClick={handleDateSelect}> {formatDate(new Date(parseInt(date)))} </div>)
        )
      }
    </div>
  )
}
