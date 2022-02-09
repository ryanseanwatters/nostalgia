import React from 'react'; 
import './Header.css';

export default function Header() {
  return (
    <div className='Header'>
      <div className='Header-child' onClick={() => alert('colors clicked')}> colors </div>
      <div className='Header-child' onClick={() => alert('sign out clicked')}> sign out </div>
    </div>
  )
}
