import React, { useState } from 'react'
import { APP_NAME, NAV_LIST } from '../../constant'
import './navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../../uploads/Idio-logo.svg'
function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab,setActiveTab] = useState('Home');
  return (
    <div className='nav-section'>
        <p className="nav-app-name"
            style={{
              fontWeight:"600",
              fontSize: "20px"
            }}>
          {APP_NAME.name}
          {/* <img src={Logo} alt='Idio' className='app-logo'/> */}
        </p>
        <ul className="nav-list">
          {NAV_LIST.map((each) => (
            <li className="nav-list-each-item" key={each.id}>
              <Link to={each.url}
                    onClick={() => setActiveTab(each.name)} 
                    className={activeTab === (each.name) ? 'list-item active' : 'list-item'}>
                    {each.name}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-section-right">
          {isLoggedIn ? 
          <p>Username</p> : 
          <Link to='/login'>
              <button className='nav-login-btn'
                  style={{
                    width:"80px",
                    height : "30px",
                    backgroundColor: '#23314dda',
                    border:"none",
                    outline : "none",
                    borderRadius : "4px",
                    color : "#fefcfc",
                    cursor : "pointer",
                  }}
              >Login</button>
            </Link>}
        </div>
    </div>
  )
}

export default Navbar