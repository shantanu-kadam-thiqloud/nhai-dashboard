import React, {useState} from 'react';
import logo from '../../Assets/images/Kotak_logo.png';
import NHAILogo from '../../Assets/images/NHAI-Logo-VECTOR.png';
import Logout from '../Login/Logout';
import { useLocation } from 'react-router-dom';
//import { Link } from 'react-router-dom';

function Header() {
  const [lastLogin, setLastLogin] = useState('8 Aug 2023, 05:18 PM');
  const location = useLocation();
  const isDashboard = (location.pathname === '/dashboard' || location.pathname === '/Dashboard') ? true:false;
  return (    
    <header>
      <div className="logo col-md-10">
       <a href='/NHAI'> <img src={logo} alt="Logo" className="headerLogo"/></a>
       {isDashboard && <span className='lastLogin'>Last Logged in {lastLogin}</span> } 
      </div>
      <div className="logoNHAI col-md-2">
       <a href='/'> <img src={NHAILogo} alt="NHAILogo" className="NHAILogo"/></a>
       <span className='NHAIText'>NHAI</span>
       {isDashboard && <Logout /> }       
      </div> 
    </header>
  );
}

export default Header;