import React from 'react'; 
import { NavLink } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <NavLink to="/colors" className="Header-child">
        colors
      </NavLink> 

      <NavLink to="/settings" className="Header-child">
        settings
      </NavLink> 

      <NavLink to="/login" className="Header-child">
        sign out
      </NavLink> 
    </div>
  )
}
