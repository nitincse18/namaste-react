import logo from '../../public/image/logo.png'
import { useState } from 'react';

const Header = () => {

  const [title, setTitle] = useState('')
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;