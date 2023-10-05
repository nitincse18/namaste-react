// import logo from '../../public/image/logo.png'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const [btnName, setBtnName] = useState('Login')
  const [title, setTitle] = useState('')

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // Selector

  const cartItems = useSelector((store) => store.cart.items)


  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => called everytime btnName is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [btnName])
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100">
        <div className="logo-container">
          <img className="w-56" src='https://www.zdnet.com/a/img/resize/fadda7dddd7f97cc0f0e055ce4b2c736d16a394e/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&fit=crop&height=1200&width=1200' />
        </div>
        <div className="flex items-center">
          <ul className='flex p-4 m-4'>
            <li className='px-4'>Online Status: {onlineStatus ? '💚' : '🔴'}</li>
            <li>
            <Link to="/">Home</Link> 
            </li>
            <li className='px-4'>
              <Link to="/about">About</Link> 
            </li>
            <li className='px-4'>
              <Link to="/contact">Contact Us</Link> 
            </li>
            <li className='px-4'>
              <Link to="/grocery">Grocery</Link> 
            </li>

            <li className='px-4 font-bold text-xl text-black'><Link to="/cart">🛒{cartItems.length}</Link> </li>
            
            <button className='login' 
              onClick={() => btnName === 'Login' ? 
              setBtnName("Logout") : 
              setBtnName("Login")}>
                {btnName}
            </button>

            <li className='px-4 font-bold'>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;