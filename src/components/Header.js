import logo from '../../public/image/logo.png'
import { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';
import Contact from './Contact';

const Header = () => {

  const [btnName, setBtnName] = useState('Login')
  const [title, setTitle] = useState('')

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => called everytime btnName is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName])
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/about">About</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link> 
            </li>
            <li>Profile</li>
            <button className='login' onClick={() => btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

export default Header;