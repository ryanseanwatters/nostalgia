import React from 'react'; 
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <div className='Header-child' onClick={() => alert('colors clicked')}> colors </div>
        <div className='Header-child' onClick={() => alert('sign out clicked')}> sign out </div>
      </div>
    )
  }
}

export default Header;
